import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import { Link as _Link } from 'react-router-dom';


export const Container = styled(Paper)`
  position: relative;
  padding: 1rem;
  background-color: white;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 0.5rem;
`;

export const SeeMoreButton = styled(Button)`
  && {
    width: 140px;
    font-size: 0.8rem;
    font-weight: 300;
    font-style: none;
    text-decoration: none;
  }
`;

export const Link = styled(_Link)`
  text-decoration: none;
  color: black;
`