import styled from "styled-components";
import Button from '@material-ui/core/Button';


export const FiltersContainer = styled.div`
  padding: 1rem;
  padding-right: 1.75rem;
  gap: 2rem;
  display: flex;
  align-items: center;
`;

export const EventTypes = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export const EventTypeButton = styled(Button)<{ _color: string }>`
  && {
    border-radius: 20px;
    background-color: ${({ _color }) => _color};
    color: white;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ _color }) => _color};
    }
  }
`;