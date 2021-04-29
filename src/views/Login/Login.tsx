import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import { FormikField } from "components/FormikField";

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

	password: Yup.string()
		.required("Password is required")
		.min(2, "Provide correct password"),
});

const Login: React.FC = () => {
	const handleSubmit = (values: FormValues): void => {
		alert(JSON.stringify(values));
	};

	return (
		<div>
			<h1>Login</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={LoginSchema}
			>
				{({ dirty, isValid }) => {
					return (
						<Form>
							<FormikField name="email" label="Email" required />
							<FormikField
								type="password"
								name="password"
								label="Password"
								required
							/>

							<Button
								variant="contained"
								color="primary"
								disabled={!dirty || !isValid}
								type="submit"
							>
								Login
							</Button>
						</Form>
					);
				}}
			</Formik>

			<h3>
				Don't have account? <Link to="/register">Register!</Link>
			</h3>
		</div>
	);
};

export default Login;
