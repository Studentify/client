import styled from "styled-components";
import { Link as HyperLink } from "react-router-dom";

export const Link = styled(HyperLink)`
	color: rgb(256, 156, 44);
	text-decoration: none;
	&:hover {
		color: rgb(256, 170, 54);
	}
`;
