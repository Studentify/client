import React from 'react';
import { useSelector } from 'hooks/redux';

import ThreadItem from '../ThreadItem';
import { Container, List, ListTitle } from './ThreadsList-style';

import { ThreadsListProps } from './types';

import { deduceInterlocutor } from 'utils/threads';



const ThreadsList: React.FC<ThreadsListProps> = ({ title, threads }) => {
  const me = useSelector(state => state.auth.user);

  return (
    <Container>
      <ListTitle variant="h4" gutterBottom>{title}</ListTitle>
      <List>
        {threads.map((thread, idx) => {
          const interlocutor = deduceInterlocutor(me, thread);

          return (
            <ThreadItem 
              key={thread.id} 
              lp={idx} 
              interlocutor={interlocutor}
              thread={thread} 
            />
          )
      })}
      </List>
    </Container>
  );
}

export default ThreadsList;
