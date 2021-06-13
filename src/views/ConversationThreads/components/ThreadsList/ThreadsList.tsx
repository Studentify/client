import React from 'react';
import ThreadItem from '../ThreadItem';

import { Container, List, ListTitle } from './ThreadsList-style';

import { ThreadsListProps } from './types';


const ThreadsList: React.FC<ThreadsListProps> = ({ title, threads }) => {
  return (
    <Container>
      <ListTitle variant="h4" gutterBottom>{title}</ListTitle>
      <List>
        {threads.map((thread, idx) => (
          <ThreadItem key={thread.id} lp={idx} {...thread} />
        ))}
      </List>
    </Container>
  );
}

export default ThreadsList;
