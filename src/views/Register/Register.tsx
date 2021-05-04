import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormikField } from "components/FormikField";
import { ContentWrapper } from "styles/ContentWrapper";
import { OrangeButton } from "styles/OrangeButton";
import { Link } from "styles/Link";

interface FormValues {
	userName: string;
	email: string;
	phoneNumber: string;
	password: string;
}

const initialValues: FormValues = {
	userName: "",
	email: "",
	phoneNumber: "",
	password: "",
};

const RegisterSchema = Yup.object().shape({
	userName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Firstname is required"),

	email: Yup.string().email().required("Email is required"),

	phoneNumber: Yup.string()
		.required("Phone number is required")
		.matches(/[0-9]{3}-[0-9]{3}-[0-9]{3}/g, "Format: 123-123-123"),

	password: Yup.string().required("Password is required").min(2, "Provide correct password"),
});

const Register: React.FC = () => {
	const handleSubmit = (values: FormValues): void => {
		alert(JSON.stringify(values));
	};

	return (
		<ContentWrapper>
			<h1>Register</h1>
			<br />
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={RegisterSchema}
			>
				{({ dirty, isValid }) => {
					return (
						<Form>
							<FormikField name="userName" label="User Name" required />

							<FormikField name="email" label="Email" required />

							<FormikField name="phoneNumber" label="Phone Number" required />

							<FormikField type="password" name="password" label="Password" required />

							<OrangeButton variant="contained" disabled={!dirty || !isValid} type="submit">
								Create Account
							</OrangeButton>
						</Form>
					);
				}}
			</Formik>
			<br />
			<h3>
				Already have an account? <Link to="/login">Login!</Link>
			</h3>
		</ContentWrapper>
	);
};

export default Register;
