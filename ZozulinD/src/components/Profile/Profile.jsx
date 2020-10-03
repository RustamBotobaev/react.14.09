import React from 'react';

import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';

function Profile() {
  const { name } = useSelector(state => state.profile);

  return <Typography variant="h4">{name}</Typography>;
}

export default Profile;
