import styled from 'styled-components';
import { Form as _Form, ErrorMessage as _ErrorMessage } from 'formik';


export const FormWrapper = styled.div`
  width: 1000px;
  height: 400px;
  background-color: #fff;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled(_Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

export const Controls = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled(_ErrorMessage)`
  font-size: 0.9rem;
  color: grey;
  height: 30px;
`;