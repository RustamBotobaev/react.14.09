import React from 'react';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  message: {
    maxWidth: '80%',
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
  },
  messageBot: {
    alignSelf: 'flex-start',
  },
  authorName: {
    fontSize: '0.9em',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textAlign: 'end',
  },
  authorBot: {
    textAlign: 'start',
  },
  text: {
    wordBreak: 'break-all',
  },
}));

const Message = ({ message, author }) => {
  const classes = useStyles();

  const itemClasses = cn(classes.message, { [classes.messageBot]: author === 'Bot' });
  const authorClasses = cn(classes.authorName, classes.text, {
    [classes.authorBot]: author === 'Bot',
  });

  return (
    <li className={itemClasses}>
      <span className={authorClasses}>{author}</span>
      <span className={classes.text}>{message}</span>
    </li>
  );
};

export default Message;
