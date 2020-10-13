import React, { useEffect, useRef } from 'react';
import Message from '../Message';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(9, 2, 11, 2),
    boxSizing: 'border-box',
    height: '100vh',
    overflow: 'scroll',
    width: '100%',
  },
}));

let listRef;

const MessageList = ({ messages, userName, newMessagesIds }) => {
  const classes = useStyles();

  listRef = useRef();

  useEffect(() => {
    const { current } = listRef;

    if (current) {
      current.scrollTo(0, current.scrollHeight);
    }
  }, [messages]);

  return (
    <Container className={classes.list} ref={listRef}>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          userName={userName}
          highlighted={newMessagesIds.includes(message.id)}
        />
      ))}
    </Container>
  );
};

MessageList.propTypes = {
  userName: PropTypes.string.isRequired,
  newMessagesIds: PropTypes.any.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
};

export default MessageList;
