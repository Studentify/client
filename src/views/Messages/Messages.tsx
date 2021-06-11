import React from 'react';

import { Wrapper } from './Messages-style';

import { MessagesProps, Message } from './types';

const messages: Message[] = [
  { id: 0, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1},
  { id: 1, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1},
  { id: 2, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1},
  { id: 3, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 1},
  { id: 4, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 2},
  { id: 5, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 2},
  { id: 6, date: new Date().toISOString(), content: "Lorem ipsum sit dolor amet", threadId: 2},
]


const Messages: React.FC<MessagesProps> = () => {
  return (
    <Wrapper>
      <h3>Your messages</h3>
      <ul>
        <li>
          <ul></ul>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Messages;
