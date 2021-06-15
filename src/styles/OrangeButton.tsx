import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const OrangeButton = styled(({ ...rest }) => <Button {...rest} />)`
	&& {
		padding: 20px 40px;
		border-radius: 1em;
		background-color: rgb(256, 156, 44);
		color: white;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
		&:hover {
			background-color: rgb(236, 136, 14);
		}
	}
`;
