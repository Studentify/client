import React from 'react';

import { Container, MessageItem } from './Conversation-style';

import { Message } from '../../types';

const Conversation = ({ messages = [] }: { messages?: Message[]}) => {
  return (
    <Container>
      <ul>
        {messages.map(message => (
          <MessageItem key={message.id}>
            {message.content}
          </MessageItem>
        ))}
      </ul>
    </Container>
  );
}

export default Conversation;
