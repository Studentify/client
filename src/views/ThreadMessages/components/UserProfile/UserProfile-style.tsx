import { Typography } from '@material-ui/core';
import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const EmailSpan = styled(Typography)`
  && {
    font-size: 0.8rem;
    color: gray;
  }
`;