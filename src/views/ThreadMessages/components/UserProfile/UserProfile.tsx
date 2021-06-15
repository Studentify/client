import React from 'react';

import { Container, EmailSpan } from './UserProfile-style';

import PersonIcon from '@material-ui/icons/Person';
import { Avatar, Typography } from '@material-ui/core';

import { UserProfileProps } from './types';


const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  let firstName = "";
  let lastName = "";
  let email = "";

  if (user) {
    firstName = user.firstName;
    lastName = user.lastName;
    email = user.email;
  }
  
  return (
    <Container>
      <Avatar>
        <PersonIcon fontSize="large"/>
      </Avatar>
        <Typography variant="body2">
          {firstName} {lastName}
          <EmailSpan variant="body2">{email}</EmailSpan>
        </Typography>
    </Container>
  );
}

export default UserProfile;
