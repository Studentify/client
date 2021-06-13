import React from 'react';

import { Container, MessagesList, MessageItem } from './Conversation-style';
import { Typography } from '@material-ui/core';
import { Message } from '../../types';

const Conversation = ({ messages = [] }: { messages?: Message[]}) => {
  return (
    <Container>
      <MessagesList>
        {messages.map(message => (
          <MessageItem key={message.id} isMine={message.id === 1}>
            <Typography component="p" variant="body2">{message.content}</Typography>
          </MessageItem>
        ))}
      </MessagesList>
    </Container>
  );
}

export default Conversation;
