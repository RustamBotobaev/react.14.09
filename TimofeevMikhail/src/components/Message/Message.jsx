import React from 'react';
import cn from 'classnames';
import { Box, withStyles } from '@material-ui/core';

const Message = ({ author, message, className }) => {
  if (author !== 'Bot') {
    return (
      <Box component="li" marginTop={1} marginLeft={32}>
        {`${author}: ${message}`}
      </Box>
    );
  }
  if (author === 'Bot') {
    return (
      <Box component="li" marginTop={1} width={320}>
        {`${author}: ${message}`}
      </Box>
    );
  }
};

export default Message;
