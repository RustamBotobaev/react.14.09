import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../Message';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    marggin: 0,
    border: '1px solid #333',
    width: '100%',
    padding: theme.spacing(4),
    borderRadius: 12,
  },
}));

const MessageList = ({ messages }) => {
  const classes = useStyles();
  // const { id } = useParams();
  // const chats = useSelector(state => state.chats.byIds);
  // const messagesFromRedux = useSelector(state => state.messages.byIds);

  // const messages = (chats[id]?.messageList ?? []).map(idx => messagesFromRedux[idx]);

  return (
    <Box component="ul" className={classes.list}>
      {messages.map(({ id, author, message }) => (
        <Message key={id} author={author} message={message} />
      ))}
    </Box>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
};

export default MessageList;
