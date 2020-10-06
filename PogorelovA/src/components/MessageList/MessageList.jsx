import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
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

const MessageList = ({ messages, activeMessages }) => {
  const classes = useStyles();
  listRef = useRef();

  useEffect(() => {
    const { current } = listRef;

    if (current) {
      current.scrollTo(0, messages.length * 36);
    }
  }, [messages]);

  return (
    <Box ref={listRef} component="ul" className={classes.list}>
      {messages.length ? (
        messages.map(({ id, author, message }) => (
          <Message
            key={id}
            author={author}
            message={message}
            isActive={activeMessages.includes(id)}
          />
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
  activeMessages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default MessageList;
