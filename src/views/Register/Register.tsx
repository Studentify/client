import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormikField } from "components/FormikField";
import { ContentWrapper } from "styles/ContentWrapper";
import { OrangeButton } from "styles/OrangeButton";
import { Link } from "styles/Link";

interface FormValues {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const initialValues: FormValues = {
	username: "",
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const RegisterSchema = Yup.object().shape({
	username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Username is required"),

	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("First name is required"),

	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Last name is required"),

	email: Yup.string().email().required("Email is required"),

	password: Yup.string().required("Password is required").min(5, "Must be 5 letters long"),
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
							<FormikField name="username" label="User Name" required />

							<FormikField name="firstName" label="First name" required />

							<FormikField name="lastName" label="Last name" required />

							<FormikField name="email" label="Email" required />

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
