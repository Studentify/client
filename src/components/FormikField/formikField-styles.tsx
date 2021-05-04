import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const CustomTextField = styled(TextField)`
	&& {
		width: 400px;
		margin: 7px 0;
		border-radius: 0;

		@media (max-width: 800px) {
			width: 90%;
		}
	}
`;
