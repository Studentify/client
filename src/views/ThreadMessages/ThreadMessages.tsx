import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'api/axiosInstance';

import { Wrapper, Header } from './ThreadMessages-style';
import { 
  Conversation,
  EventInfo,
  SendMessageForm,
  UserProfile,
 } from './components';
import { Box, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Message } from './types';

const messag = [
  { id: 0, content: "Hello there, I have a question about the event", date: new Date().toISOString(), authorId: 1 },
  { id: 1, content: "Hi, how can I help you?", date: new Date().toISOString(), authorId: 2 },
  { id: 2, content: "Ziobro TY KURWO JEBANA", date: new Date().toISOString(), authorId: 1 },
  { id: 3, content: "Ah shit, here we go again...", date: new Date().toISOString(), authorId: 2 },
]


const ThreadMessages = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [messages, setMessages] = useState(messag);

  useEffect(() => {
    fetchMessages(threadId);

    async function fetchMessages(threadId: string) {
      try {
        const res = await axios.get<Message[]>(`/Threads/${threadId}/Messages`);
        // setMessages(res.data);
      } catch(err) {
        console.log(err);
        // setMessages([]);
      }
    }
  }, [threadId, setMessages]);

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
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<ArrowBackIosIcon />}
          >
            back
          </Button>
        </Box>
        <UserProfile />
        <EventInfo />
      </Header>
      <Conversation messages={messages}/>
      <SendMessageForm onSendMessage={sendMessage}/>
    </Wrapper>
  );
}

export default ThreadMessages;
