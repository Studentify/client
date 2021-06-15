import React, { useState, useEffect } from 'react';
import axios from 'api/axiosInstance';

import { Wrapper } from './ConversationThreads-style';
import { ThreadsList } from './components';

import { isDateToday } from 'utils/date';


const MessagesView = () => {
  const [conversationThreads, setConversationThreads] = useState<ConversationThread[]>([]);

  useEffect(() => {
    fetchThreads();

    async function fetchThreads() {
      try {
        const res = await axios.get<ConversationThread[]>('/Threads');
        setConversationThreads(res.data);

      } catch(err) {
        console.log(err);
      }
    }
  }, [setConversationThreads])

  const threadsWIthTodaysMessages = conversationThreads.filter(thread => isDateToday(thread.lastMessage.date));
  const remainingThreads = conversationThreads.filter(thread => threadsWIthTodaysMessages.indexOf(thread) === -1);

  return (
    <Wrapper>
      <ThreadsList title="Todays messages:" threads={threadsWIthTodaysMessages}/>
      <ThreadsList title="History:" threads={remainingThreads}/>
    </Wrapper>
  );
}

export default MessagesView;
