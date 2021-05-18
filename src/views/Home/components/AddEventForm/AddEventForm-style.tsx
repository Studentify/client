import styled from "styled-components";
import { Form as _Form } from "formik";


export const Form = styled(_Form)`
  width: 1200px;
  height: 600px;
  background-color: #fff;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 2rem;
`;