import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const ModalLayout = styled.div`
	width: 60vw;
	height: 60vh;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	font-family: BlenderProBold, sans-serif;

	@media (max-width: 800px) {
		width: 90vw;
		height: 80vh;
	}

	background-color: #fff;
`;

export const ExitBar = styled.div`
	height: 50px;
	text-align: right;
`;

export const ExitIconButton = styled(IconButton)`
	top: 0;
	right: 0;
`;

export const ContentWrapper = styled.div`
	position: relative;
	height: calc(100% - 50px);
	display: flex;
	padding: 2rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
