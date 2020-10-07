import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../Message';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    marggin: 0,
    maxHeight: 200,
    overflow: 'auto',
    border: '1px solid #333',
    width: '100%',
    padding: theme.spacing(4),
    borderRadius: 12,
  },
}));

let listRef;

const MessageList = ({ messages }) => {
  const classes = useStyles();
  listRef = useRef();
  // const { id } = useParams();
  // const chats = useSelector(state => state.chats.byIds);
  // const messagesFromRedux = useSelector(state => state.messages.byIds);

  // const messages = (chats[id]?.messageList ?? []).map(idx => messagesFromRedux[idx]);

  useEffect(() => {
    const { current } = listRef;
    if (current) {
      current.scrollTo(0, 0);
    }
  }, [messages]);

  return (
    <Box ref={listRef} component="ul" className={classes.list}>
      {messages.length ? (
        messages.map(({ id, author, message }) => (
          <Message key={id} author={author} message={message} />
        ))
      ) : (
        <Typography>Здесь ещё нет сообщений</Typography>
      )}
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
