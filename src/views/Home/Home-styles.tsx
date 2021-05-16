import styled from "styled-components";
import Fab from "@material-ui/core/Fab";


export const HomeLayout = styled.section`
  display: flex;
  height: 90vh;
  gap: 1rem;
  font-family: BlenderProBold, sans-serif;
`;

export const ColumnView = styled.section`
  flex: 1;
  background-color: #cebebe;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AddEventButton = styled(Fab)`
  && {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;