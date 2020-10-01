import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  messageTxt: {
    border: '1px solid',
    borderRadius: '24px',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  Bot: {
    alignSelf: 'flex-start',
  },
  me: {
    alignSelf: 'flex-end',
    border: '1px solid #3f51b5',
  },
  messageAuthor: {
    fontSize: '12px',
    color: 'darkgray',
  },
}));

const Message = ({ author, text, className }) => {
  const classes = useStyles();

  return (
    <Box
      component="li"
      className={cn(classes.messageTxt, (className = author === 'Bot' ? classes.Bot : classes.me))}
    >
      <span className={classes.messageAuthor}>{author}</span>
      <span>{text}</span>
    </Box>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
