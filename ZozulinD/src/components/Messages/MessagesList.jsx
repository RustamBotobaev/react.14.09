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
      {messages.map(({ id, author, message }) => {
        return <Message key={id} message={message} author={author} />;
      })}
    </ul>
  );
}

export default MessagesList;
