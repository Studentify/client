import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper, Header } from './ThreadMessages-style';
import { 
  Conversation,
  EventInfo,
  SendMessageForm,
  UserProfile,
 } from './components';
import IconButton from '@material-ui/core/IconButton';
import ReplyIcon from '@material-ui/icons/Reply';

const messag = [
  { id: 0, content: "LOREEEEEEM", date: new Date().toISOString(), authorId: 1 },
  { id: 1, content: "LOREEEEEEM", date: new Date().toISOString(), authorId: 2 },
  { id: 2, content: "LOREEEEEEM", date: new Date().toISOString(), authorId: 1 },
]


const ThreadMessages = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [messages, setMessages] = useState(messag);

  const sendMessage = (message: string) => {
    const newMessage = {
      id: Math.floor(Math.random()*100000), 
      content: message,
      date: new Date().toISOString(), 
      authorId: 1
    };

    setMessages([...messages, newMessage]);
  }

  return (
    <Wrapper>
      <Header>
        <IconButton aria-label="delete">
          <ReplyIcon />
        </IconButton>
        <UserProfile />
        <EventInfo />
      </Header>
      <Conversation messages={messages}/>
      <SendMessageForm onSendMessage={sendMessage}/>
    </Wrapper>
  );
}

export default ThreadMessages;
