import styled from 'styled-components';
import { Typography } from '@material-ui/core';


export const Container = styled.article`

`;

export const ListTitle = styled(Typography)`
  && {
    margin: 2rem 0 1rem 0;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;