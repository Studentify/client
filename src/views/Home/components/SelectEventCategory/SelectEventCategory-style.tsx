import styled from "styled-components";
import { Typography, Card, CardActionArea } from "@material-ui/core";


export const StepWrapper = styled.div`
  grid-column: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Tiles = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 200px;
  position: relative;
`;

export const OptionCard = styled(Card)`
  flex: 1;

`;

export const OptionContent = styled(CardActionArea)<{ isSelected: boolean }>`
  height: 100%;

  && {
    background-color: ${props => props.isSelected ? "#3edb87" : "white"};
    transition: background-color 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorMessage = styled(Typography)`
  && {
    height: 40px;
    line-height: 40px;
  }
`;

export const Controls = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
`;