import React from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from './ThreadMessages-style';


const ThreadMessages = () => {
  const { threadId } = useParams<{ threadId: string }>();

  return (
    <Wrapper>
      Messages in specific thread of id: {threadId}
    </Wrapper>
  );
}

export default ThreadMessages;
