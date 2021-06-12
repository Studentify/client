import { Typography } from '@material-ui/core';
import styled from 'styled-components';


export const Container = styled.article`
  padding: 20px;
  border-radius: 3px;
  background-color: #e6e6e6;
  display: flex;
  gap: 2rem;
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