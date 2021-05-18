import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { ErrorMessage as _ErrorMessage } from "formik";


export const Col = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const Row = styled.div`
  grid-column: 1/-1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddressInformation = styled(Typography)`
  display: flex;
  gap: 0.5rem;
  justify-items: center;
`;

export const ErrorMessage = styled(_ErrorMessage)`
  font-size: 0.9rem;
  color: grey;
  height: 30px;
`;
