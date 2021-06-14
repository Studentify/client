import styled from 'styled-components';


export const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
  padding: 2rem;
  margin-top: 70px;

  display: flex;
  gap: 1rem;
  flex-direction: column;

  background-color: #f3f3f3;
`;

export const Header = styled.header`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background-color: white;

  border-radius: 3px;

  -webkit-box-shadow: 3px 3px 13px -5px #818181;
  box-shadow: 3px 3px 13px -5px #818181;
`;