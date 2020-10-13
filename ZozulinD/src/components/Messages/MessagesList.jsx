import React from 'react';

import { makeStyles } from '@material-ui/core';

import Message from './Message';

const useStyles = makeStyles(theme => ({
  messagesList: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: theme.spacing(2),
    width: 500,
  },
}));

function MessagesList({ messages }) {
  const classes = useStyles();

  return (
    <ul className={classes.messagesList}>
      {messages.map(message => {
        return <Message key={message.id} {...message} />;
      })}
    </ul>
  );
}

export default MessagesList;
