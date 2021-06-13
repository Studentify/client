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

export const MessagesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

type MessageItemProps = {
  isMine: boolean;
}

export const MessageItem = styled.li<MessageItemProps>`
  word-wrap: break-word;
  max-width: 800px;  
  padding: 0.75rem 1.25rem;
  border-radius: 20px;
  background-color: ${({ isMine }) => isMine ? '#3f51b5' : '#d4d4d4'};
  color: ${({ isMine }) => isMine ? 'white' : 'black'};
  align-self: ${({ isMine }) => isMine ? 'flex-end' : 'flex-start'};
  border-bottom-right-radius: ${({ isMine }) => isMine ? '5' : '20'}px;
  border-bottom-left-radius: ${({ isMine }) => !isMine ? '5' : '20'}px;
`;
