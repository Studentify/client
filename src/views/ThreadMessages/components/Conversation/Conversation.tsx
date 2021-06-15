import React, { useRef, useEffect } from 'react';
import { useSelector } from 'hooks/redux';

import { Container, MessagesList, MessageItem } from './Conversation-style';
import { Typography } from '@material-ui/core';
import { Message } from '../../types';

const Conversation = ({ messages = [] }: { messages?: Message[]}) => {
  const messagesListRef = useRef<HTMLLIElement>(null);
  const me = useSelector(state => state.auth.user);

  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages])

  return (
    <Container>
      <MessagesList>
        {messages.map(message => (
          <MessageItem key={message.id} isMine={message.author.id === me?.id}>
            <Typography component="p" variant="body2">{message.content}</Typography>
          </MessageItem>
        ))}
        <li ref={messagesListRef}></li>
      </MessagesList>
    </Container>
  );
}

export default Conversation;
