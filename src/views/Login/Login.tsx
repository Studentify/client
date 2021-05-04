import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormikField } from "components/FormikField";
import { ContentWrapper } from "styles/ContentWrapper";
import { OrangeButton } from "styles/OrangeButton";
import { Link } from "styles/Link";

interface FormValues {
	email: string;
	password: string;
}

const initialValues: FormValues = {
	email: "",
	password: "",
};

const LoginSchema = Yup.object().shape({
	email: Yup.string().email().required("Email is required"),

	password: Yup.string().required("Password is required").min(2, "Provide correct password"),
});

const Login: React.FC = () => {
	const handleSubmit = (values: FormValues): void => {
		alert(JSON.stringify(values));
	};

	return (
		<ContentWrapper>
			<h1>Login</h1>
			<br />
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
				{({ dirty, isValid }) => {
					return (
						<Form>
							<FormikField name="email" label="Email" required />
							<FormikField type="password" name="password" label="Password" required />

							<OrangeButton variant="contained" disabled={!dirty || !isValid} type="submit">
								Login
							</OrangeButton>
						</Form>
					);
				}}
			</Formik>

			<br />
			<h3>
				New to Studentify? <Link to="/register">Register!</Link>
			</h3>
		</ContentWrapper>
	);
};

export default Login;
