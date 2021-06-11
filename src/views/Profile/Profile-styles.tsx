import styled from "styled-components";
import { Grid as ToStyleGrid } from "@material-ui/core";

export const ProfileLayout = styled.section`
	margin-top: 70px;
	align-items: center;
	text-align: center;
	flex-grow: 1;
	font-family: BlenderProBold, sans-serif;
	min-height: calc(100vh - 70px);
`;

export const Grid = styled(ToStyleGrid)`
	&& {
		align-items: center;
		justify-content: center;
		border: 2px solid black;
	}
`;

export const GridELement = styled(ToStyleGrid)`
	&& {
		position: relative;
		border: 2px solid black;
		height: 100%;
	}
`;

export const Avatar = styled.div`
	text-align: center;
	padding: 20px;
`;

export const Content = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;
	text-align: left;
	padding: 20px;
`;
