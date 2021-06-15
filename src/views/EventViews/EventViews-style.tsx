import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;
`;

export const EventHeader = styled.header<{ eventType: string }>`
  display: flex;
  padding: 1rem 0;

  &::before {
    content: '';
    position: relative;
    height: 100%;
    top: -1rem;
    width: 15px;
    padding: 1rem 0;
    background-color: ${({ eventType }) => getEventColorByEventType(eventType)};
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;

export const EventHeaderContent = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CloseButton = styled(Fab)`
  && {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const Headline = styled(Typography)<{ eventType: string }>`
  border-bottom: 2px solid ${({ eventType }) => getEventColorByEventType(eventType)};
`;

export const EventControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const EventMeta = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const EventButton = styled(Button)<{ eventType: string }>`
  && {
    color: ${({ eventType }) => getEventTextColorByEventType(eventType)};
    background-color: ${({ eventType }) => getEventColorByEventType(eventType)};

    &:active, &:hover {
      background-color: ${({ eventType }) => getEventColorByEventType(eventType)};
    }
  }
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: black;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translate(10px);
  }
`;

export const ElevatedBox = styled(Typography)<{ disablePadding?: boolean }>`
  && {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;

    padding: ${({ disablePadding }) => disablePadding ? '0rem' : '1rem'};
    background-color: white;

    border-radius: 3px;

    -webkit-box-shadow: 3px 3px 13px -5px #818181;
    box-shadow: 3px 3px 13px -5px #818181;
    }
`;

function getEventColorByEventType(eventType: string) {
  switch(eventType) {
    case "INFO": return "#3f51b5";
    case "MEETING": return "#e0be32";
    case "TRADEOFFER": return "#40a85c"
    default: return "#3f51b5";
  }
}

function getEventTextColorByEventType(eventType: string) {
  switch(eventType) {
    case "INFO": return "#fff";
    case "MEETING": return "#000";
    case "TRADEOFFER": return "#fff";
    default: return "#fff";
  }
}