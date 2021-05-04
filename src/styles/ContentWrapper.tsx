import styled from "styled-components";

export const ContentWrapper = styled.div`
	overflow: hidden;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	font-family: BlenderProBold, sans-serif;

	@media (max-width: 800px) {
		width: 100vw;
		padding: 20px;
	}
`;
