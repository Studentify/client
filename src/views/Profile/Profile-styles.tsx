import styled from "styled-components";
import { Grid as ToStyleGrid } from "@material-ui/core";

export const ProfileLayout = styled.section`
	align-items: center;
	text-align: center;
	flex-grow: 1;
	font-family: BlenderProBold, sans-serif;
	min-height: calc(100vh - 70px);

	width: 65vw;
	margin: auto;
	margin-top: 70px;
	padding: 30px;
	background-color: #f5f5f5;

	@media (max-width: 768px) {
		width: 100%;
		padding: 20px;
	}
`;

export const Grid = styled(ToStyleGrid)`
	&& {
		align-items: center;
		justify-content: center;
	}
`;

export const GridELement = styled(ToStyleGrid)`
	&& {
		position: relative;
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

export const UserNameBox = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
