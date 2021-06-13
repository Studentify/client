import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import { Link as _Link } from 'react-router-dom';


export const Link = styled(_Link)`
  text-decoration: none;
  color: black;
  padding: 20px;
  border-radius: 3px;
  background-color: #e6e6e6;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  gap: 2rem;

  &:hover {
    background-color: #d4d4d4;
  }
`;

export const ThreadHeader = styled.header`
  display: flex;
  gap: 2rem;
`;

export const AuthorProfile = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AuthorPersonalInfo = styled.div`
`;

export const FromSpan = styled(Typography)`
  && {
    font-size: 0.7rem;
    color: gray;
  }
`;

export const TimeSpan = styled(Typography)`
  && {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const Author = styled(Typography)`
  && {
    font-size: 1rem;
  }
`;