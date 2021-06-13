import styled from 'styled-components';


export const Container = styled.div`
  flex: 1;
  max-height: 65vh;
  
  padding: 1rem;
  background-color: white;

  border-radius: 3px;

  -webkit-box-shadow: 3px 3px 13px -5px #818181;
  box-shadow: 3px 3px 13px -5px #818181;

  overflow-y: auto;
`;

export const MessageItem = styled.li`
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #7fb2d4;
`;