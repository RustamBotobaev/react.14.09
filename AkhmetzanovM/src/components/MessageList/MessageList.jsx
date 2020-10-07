import React from 'react';
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

const MessageList = ({ messages, userName }) => {
  const classes = useStyles();

  return (
    <Container className={classes.list}>
      {messages.map((message) => (
        <Message key={message.id} message={message} userName={userName} />
      ))}
    </Container>
  );
};

MessageList.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
};

export default MessageList;
