import styled from "styled-components";


export const List = styled.ul`
  list-style-type: none;
  position: relative;
  height: 100%;
`;

export const EventsHeader = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const EventItem = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  &:hover {
    background-color: #ececec;
    cursor: pointer;
  }
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