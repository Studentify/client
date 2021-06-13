import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
import { ConversationThread } from 'views/ConversationThreads/types';


const ThreadMessages = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [thread, setThread] = useState<ConversationThread>();
  const history = useHistory();

  useEffect(() => {
    fetchMessages(threadId);
    fetchThreadDetails(threadId);

    async function fetchMessages(threadId: string) {
      try {
        const res = await axios.get<Message[]>(`/Threads/${threadId}/Messages`);
        setMessages(res.data);
      } catch(err) {
        console.log(err);
      }
    }

    async function fetchThreadDetails(threadId: string) {
      try {
        const res = await axios.get<ConversationThread>(`/Threads/${threadId}`);
        setThread(res.data);
      } catch(err) {
        console.log(err);
      }
    }
  }, [threadId, setMessages]);

  const sendMessage = async (message: string) => {
    try {
      const res = await axios.post<Message>('/Threads/Messages', { threadId, content: message });
      setMessages(prev => [...prev, res.data]);
    } catch(err) {
      console.log(err);
    }
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
            onClick={() => history.goBack()}
          >
            back
          </Button>
        </Box>
        <UserProfile />
        <EventInfo event={thread?.referencedEvent}/>
      </Header>
      <Conversation messages={messages}/>
      <SendMessageForm onSendMessage={sendMessage}/>
    </Wrapper>
  );
}

export default ThreadMessages;
