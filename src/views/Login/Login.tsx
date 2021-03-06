import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { login } from "state/auth/actions";
import { FormikField } from "components/FormikField";
import { ContentWrapper } from "styles/ContentWrapper";
import { OrangeButton } from "styles/OrangeButton";
import { Link } from "styles/Link";

interface FormValues {
	username: string;
	password: string;
}

const initialValues: FormValues = {
	username: "",
	password: "",
};

const LoginSchema = Yup.object().shape({
	username: Yup.string().required("USername is required"),

	password: Yup.string().required("Password is required").min(2, "Provide correct password"),
});

const Login: React.FC = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values: FormValues): void => {
		dispatch(login(values.username, values.password));
	};

	return (
		<>
			<ContentWrapper>
				<h1>Login</h1>
				<br />
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={LoginSchema}
				>
					{({ dirty, isValid }) => {
						return (
							<Form>
								<FormikField name="username" label="User name" required />
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
		</>
	);
};

export default Login;
