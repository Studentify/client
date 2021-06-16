import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled(Link)`
  flex: 3;
  padding: 0.5rem;

  padding-left: 2rem;
  border-left: 2px solid #d4d4d4;

  text-decoration: none;
  color: black;
  transition: background-color 0.2s ease-in-out;
  border-radius: 3px;

  &:hover {
    background-color: #dddddd;
  }
`;

export const EventHeader = styled(Typography)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

export const EventMeta = styled(Typography)`
  && {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const EventDate = styled(Typography)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;

    color: gray;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;