import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const CustomTextField = styled(TextField)`
	&& {
		width: 400px;
		margin: 7px 0;
		border-radius: 0;
		border-color: rgb(256, 156, 44);

		& label.Mui-focused {
			color: rgb(256, 156, 44);
		}

		& .MuiOutlinedInput-root {
			&.Mui-focused fieldset {
				border-color: rgb(256, 156, 44);
			}
		}

		@media (max-width: 800px) {
			width: 90%;
		}
	}
`;
