import styled from "styled-components";
import { Link } from 'react-router-dom';


export const List = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  overflow-y: scroll;
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
  color: 'gray';
  align-items: center;
`;

export const EventContainer = styled.article`
  display: flex;
  border-radius: 3px;

  -webkit-box-shadow: 3px 3px 13px -5px #818181;
  box-shadow: 3px 3px 13px -5px #818181;

  &::before {
    display: block;
    content: "";
    width: 7px;
    background-color: #3f51b5 !important;
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
  transition: background-color 0.2s ease-in-out;
  border-radius: 3px;

  &:hover {
    background-color: #ececec;
    cursor: pointer;
  }

  &:active {
    background-color: #d3d3d3;
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

export const BlockLink = styled(Link)`
  text-decoration: none;
  color: black;
`;