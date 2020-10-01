import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Message from '../Message/Message';

const useStyles = makeStyles(theme => ({
  chat: {
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

  return (
    <Box component="ul" className={classes.chat}>
      {messages.map(({ id, author, text }) => (
        <Message key={id} author={author} text={text} />
      ))}
    </Box>
  );
};

// MessageList.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       author: PropTypes.string,
//       text: PropTypes.string,
//     }),
//   ).isRequired,
// };

export default MessageList;
