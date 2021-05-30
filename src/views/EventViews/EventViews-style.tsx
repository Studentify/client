import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';


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
  margin-bottom: 1rem;

  &::before {
    content: '';
    height: 100%;
    width: 20px;
    background-color: ${({ eventType }) => getEventColorByEventType(eventType)};
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
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


function getEventColorByEventType(eventType: string) {
  switch(eventType) {
    case "INFO": return "#3f51b5";
    case "MEETING": return "#ebc634";
    case "TRADEOFFER": return "#40a85c"
    default: return "#3f51b5";
  }
}