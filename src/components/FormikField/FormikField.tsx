import React from "react";
import { ErrorMessage, Field } from "formik";
import { CustomTextField } from "./formikField-styles";

interface FormikFieldProps {
	name: string;
	label: string;
	type?: string;
	required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
	name,
	label,
	type = "text",
	required = false,
}) => {
	return (
		<div className="FormikField">
			<Field
				required={required}
				autoComplete="off"
				name={name}
				as={CustomTextField}
				label={label}
				variant="outlined"
				type={type}
				helperText={<ErrorMessage name={name} />}
			/>
		</div>
	);
};

export default FormikField;
