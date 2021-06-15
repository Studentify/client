import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "api/axiosInstance";

import CloseIcon from "@material-ui/icons/Close";

import { ModalLayout, ContentWrapper, ExitBar, ExitIconButton } from "./ModifyAccountForm-styles";
import { FormikField } from "components/FormikField";
import { OrangeButton } from "styles/OrangeButton";

interface ModifyAccountFormProps {
	closeModal(): void;
	refreshUserData(id: number): void;
	currentData: User;
}

interface FormValues {
	firstName: string;
	lastName: string;
}

const UpdateAccountSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("First name is required"),

	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Last name is required"),
});

const ModifyAccountForm = React.forwardRef<HTMLElement, ModifyAccountFormProps>(
	({ closeModal, refreshUserData, currentData }) => {
		const initialValues: FormValues = {
			firstName: currentData.firstName,
			lastName: currentData.lastName,
		};

		async function handleSubmit(values: FormValues) {
			await patchUserData(values);
			refreshUserData(currentData.id);
			closeModal();
		}

		async function patchUserData(values: FormValues) {
			try {
				await axios.patch("/StudentifyAccounts", { ...values });
			} catch (err) {
				console.log(err);
			}
		}

		return (
			<ModalLayout>
				<ExitBar>
					<ExitIconButton onClick={closeModal}>
						<CloseIcon />
					</ExitIconButton>
				</ExitBar>
				<ContentWrapper>
					<h1>Update your data</h1>
					<br />
					<br />
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={UpdateAccountSchema}
					>
						{({ dirty, isValid }) => {
							return (
								<Form>
									<FormikField name="firstName" label="First name" required />

									<FormikField name="lastName" label="Last name" required />

									<br />
									<br />
									<OrangeButton variant="contained" disabled={!dirty || !isValid} type="submit">
										Update Account
									</OrangeButton>
								</Form>
							);
						}}
					</Formik>
				</ContentWrapper>
			</ModalLayout>
		);
	}
);

export default ModifyAccountForm;
