import React from 'react';

import { Link, Author, ThreadHeader, AuthorProfile, FromSpan, AuthorPersonalInfo, TimeSpan } from './ThreadItem-styles';
import PersonIcon from '@material-ui/icons/Person';
import { Typography, Avatar } from '@material-ui/core';

import { ThreadItemProps } from './types';

import { isDateToday } from 'utils/date';


const ThreadItem: React.FC<ThreadItemProps> = ({ lp, interlocutor, thread }) => {
  const { date, content, threadId } = thread.lastMessage;
  const isToday = isDateToday(date);

  return (
    <Link to={`/threads/${threadId}/messages`}>
      <AuthorProfile>
        <Avatar>
          <PersonIcon fontSize="large"/>
        </Avatar>
        <AuthorPersonalInfo>
          <FromSpan>User:</FromSpan>
          <Author>{interlocutor?.firstName} {interlocutor?.lastName}</Author>
        </AuthorPersonalInfo>
      </AuthorProfile>
      <div style={{ flex: 1 }}>
        <ThreadHeader>
          <Typography variant="h6" style={{ flex: 1 }}>Event: Title of specific event</Typography>
          <TimeSpan>
          {isToday 
          ? null
          : (<>{date.substring(0, 10)}<br /></>)}
          {(date.substring(11, 16))}
          </TimeSpan>
        </ThreadHeader>
        <Typography>
          Message: {content}
        </Typography>
      </div>
    </Link>
  )
}

export default ThreadItem;
