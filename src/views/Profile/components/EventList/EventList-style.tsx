import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	height: 100%;
	padding: 0 0.75rem;
`;

export const EventsHeader = styled.header`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	align-items: center;
`;

export const EventMeta = styled.header`
	display: flex;
	gap: 0.3rem;
	font-size: 0.9rem;
	color: "gray";
	align-items: center;
`;

export const EventContainer = styled.article<{ eventType: string }>`
	display: flex;
	border-radius: 3px;
	-webkit-box-shadow: 3px 3px 13px -5px #818181;
	box-shadow: 3px 3px 13px -5px #818181;
	flex-wrap: wrap;
	&::before {
		display: block;
		content: "";
		width: 7px;
		background-color: ${({ eventType }) => getEventColorByEventType(eventType)} !important;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
	}
`;

export const EventContent = styled.div`
	flex: 1;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	background-color: #ffffff;
`;

export const EventHeader = styled.h4`
	display: flex;
	justify-content: space-between;
`;

export const EventDate = styled.span`
	color: gray;
	font-size: 0.8rem;
	font-weight: 300;
`;

export const BlockLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

export const EventShortInfo = styled.section`
	flex: 3;
`;

export const EventController = styled.section`
	flex: 1;
	padding: 1rem;
	display: flex;
	gap: 0.5rem;
	background-color: #ffffff5a;
	align-items: center;
	justify-content: center;
`;

function getEventColorByEventType(eventType: string) {
	switch (eventType) {
		case "INFO":
			return "#3f51b5";
		case "MEETING":
			return "#ebc634";
		case "TRADEOFFER":
			return "#40a85c";
		default:
			return "#3f51b5";
	}
}
