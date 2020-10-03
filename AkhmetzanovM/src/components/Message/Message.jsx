import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import cn from 'classnames';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(1),
    marginRight: 'auto',
    maxWidth: 400,
    borderRadius: 8,
  },
  author: {
    color: theme.palette.primary.main,
    marginRight: 4,
  },
  user: {
    backgroundColor: theme.palette.divider,
  },
  otherusers: {
    backgroundColor: theme.palette.info.light,
  },
}));

const Message = ({ message, userName }) => {
  const classes = useStyles();

  return (
    <Box
      className={cn(classes.message, {
        [classes.user]: message.author === userName,
        [classes.otherusers]: message.author !== userName,
      })}
    >
      <span className={classes.author}>{message.author == userName ? 'Вы: ' : `${message.author}: `}</span>{' '}
      <span>{message.messageText}</span>
    </Box>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Message;
