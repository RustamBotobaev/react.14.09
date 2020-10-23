import React from 'react';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  message: {
    alignSelf: 'flex-end',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    maxWidth: '80%',
    transition: 'background-color 0.2s ease-out',
  },
  messageBot: {
    alignSelf: 'flex-start',
  },
  authorName: {
    color: theme.palette.primary.main,
    fontSize: '0.9em',
    fontWeight: 'bold',
    textAlign: 'end',
  },
  authorBot: {
    textAlign: 'start',
  },
  text: {
    wordBreak: 'break-all',
  },
  active: {
    backgroundColor: '#b5c0ff',
  },
}));

const Message = ({ message, author, isActive }) => {
  const classes = useStyles();

  const itemClasses = cn(classes.message, {
    [classes.messageBot]: author === 'Bot',
    [classes.active]: isActive,
  });
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
