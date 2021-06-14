import React, { useRef, useEffect } from 'react';

import { Container, MessagesList, MessageItem } from './Conversation-style';
import { Typography } from '@material-ui/core';
import { Message } from '../../types';

const Conversation = ({ messages = [] }: { messages?: Message[]}) => {
  const messagesListRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  return (
    <Container>
      <MessagesList>
        {messages.map(message => (
          <MessageItem key={message.id} isMine={message.authorId === 2}>
            <Typography component="p" variant="body2">{message.content}</Typography>
          </MessageItem>
        ))}
        <li ref={messagesListRef}></li>
      </MessagesList>
    </Container>
  );
}

export default Conversation;
