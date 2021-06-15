import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const HomeLayout = styled.section`
	display: flex;
	margin-top: 70px;
	height: calc(100vh - 70px);
	font-family: BlenderProBold, sans-serif;
`;

export const ColumnView = styled.section`
	flex: 1;
	background-color: #f3f3f3;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const AddEventButton = styled(Fab)`
	&& {
		position: absolute;
		bottom: 1rem;
		right: 2rem;
	}
`;
