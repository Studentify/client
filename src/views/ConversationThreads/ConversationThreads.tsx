import React from 'react';

import { Wrapper } from './ConversationThreads-style';
import { ThreadsList } from './components';

import { MessagesThread } from './types';
import { isDateToday } from 'utils/date';

const messages: MessagesThread[] = [
  { id: 0, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1, author: { firstName: "John", lastName: "Doe" }},
  { id: 1, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1,  author: { firstName: "John", lastName: "Doe" }},
  { id: 2, date: new Date(2021, 1, 20).toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1,  author: { firstName: "John", lastName: "Doe" }},
  { id: 3, date: new Date(2021, 1, 21).toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1,  author: { firstName: "John", lastName: "Doe" }},
  { id: 4, date: new Date(2021, 2, 20).toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 2,  author: { firstName: "John", lastName: "Doe" }},
  { id: 5, date: new Date(2021, 1, 21).toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 2,  author: { firstName: "John", lastName: "Doe" }},
  { id: 6, date: new Date(2021, 3, 20).toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 2,  author: { firstName: "John", lastName: "Doe" }},
]


const MessagesView = () => {
  const todayMessages = messages.filter(message => isDateToday(message.date));

  const messagesFromPast = messages.filter(message => todayMessages.indexOf(message) === -1)
  return (
    <Wrapper>
      <ThreadsList title="Todays messages:" threads={todayMessages}/>
      <ThreadsList title="History:" threads={messagesFromPast}/>
    </Wrapper>
  )
}

export default MessagesView;
