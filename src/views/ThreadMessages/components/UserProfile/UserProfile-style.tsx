import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled(Link)`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-left: 1rem;

  text-decoration: none;
  color: black;
  transition: background-color 0.2s ease-in-out;
  border-radius: 3px;

  &:hover {
    background-color: #dddddd;
  }
`;

export const EmailSpan = styled(Typography)`
  && {
    font-size: 0.8rem;
    color: gray;
  }
`;