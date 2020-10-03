import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

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

const MessageList = ({ currentChatId }) => {
  const classes = useStyles();

  const chatList = useSelector((store) => store.chats.chatList);
  const userName = useSelector((store) => store.chats.userName);
  const messageList = useSelector((store) => Object.values(store.chats.messageList));
  const messages = chatList[currentChatId].messageIdList.map((messageId) => messageList[messageId]);

  return (
    <Container className={classes.list}>
      {messages.map((message) => (
        <Message key={message.id} message={message} userName={userName} />
      ))}
    </Container>
  );
};

MessageList.propTypes = {
  currentChatId: PropTypes.string.isRequired,
  // userName: PropTypes.string.isRequired,
};

export default MessageList;
