import styled from "styled-components";

export const SkillsWrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	background-color: #b4b4b4;
	border-radius: 0.3em;
`;

export const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
	padding: 0.5em 1em;
`;

export const SkillsHeader = styled.header`
	display: flex;
	padding: 1rem;
	align-items: center;
`;

export const SkillElementWrapper = styled.div`
	border: solid #4561bd 2px;
	border-radius: 1em;
	background-color: rgb(240, 240, 240);
	padding: 0.7em;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const SkillFormWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
	padding: 1em;
`;

export const SkillInput = styled.input`
	border: solid #4561bd 2px;
	padding: 0.7em;
	border-radius: 1em;
	background-color: rgb(240, 240, 240);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	&:focus {
		outline: none;
	}
`;
