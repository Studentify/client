import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { ErrorMessage as _ErrorMessage, Form as _Form } from "formik";

export const Form = styled(_Form)`
  height: calc(600px - 4rem);
  background-color: #fff;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 2rem;
`;

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

export const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
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
