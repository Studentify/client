import React from 'react';

import { Container, EmailSpan } from './UserProfile-style';

import PersonIcon from '@material-ui/icons/Person';
import { Avatar, Typography } from '@material-ui/core';


const UserProfile = () => {
  return (
    <Container>
      <Avatar>
        <PersonIcon fontSize="large"/>
      </Avatar>
        <Typography variant="body2">
          John Doe
          <EmailSpan variant="body2">john.doe@gmail.com</EmailSpan>
        </Typography>
    </Container>
  );
}

export default UserProfile;
