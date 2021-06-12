import React from 'react';

import { Container, Author, ThreadHeader, AuthorProfile, FromSpan, AuthorPersonalInfo, TimeSpan } from './ThreadItem-styles';
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { ThreadItemProps } from './types';
import { isDateToday } from 'utils/date';


const ThreadItem: React.FC<ThreadItemProps> = ({ lp, date, content, author }) => {
  const isToday = isDateToday(date);

  return (
    <Container>
      <AuthorProfile>
        <Avatar>
          <PersonIcon fontSize="large"/>
        </Avatar>
        <AuthorPersonalInfo>
          <FromSpan>From:</FromSpan>
          <Author>{author.firstName} {author.lastName}</Author>
        </AuthorPersonalInfo>
      </AuthorProfile>
      <div style={{ flex: 1 }}>
        <ThreadHeader>
          <Typography variant="h6" style={{ flex: 1 }}>Event: Title of specific event</Typography>
          <TimeSpan>
          {isToday 
          ? null
          : (
            <>
              {date.substring(0, 10)}
              <br />
            </>
          )}
          {(date.substring(11, 16))}
          </TimeSpan>
        </ThreadHeader>
        <p>Message: {content.repeat(4)}</p>
      </div>
    </Container>
  )
}

export default ThreadItem;
