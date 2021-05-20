import styled from "styled-components";
import { Form as _Form } from "formik";


export const Wrapper = styled.div`
  width: 1200px;
  height: 600px;
  background-color: #fff;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem;
`;

export const Form = styled(_Form)`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Controls = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;