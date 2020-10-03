import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../Message';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    }
}));

const MessaheList = () => {
  const { id } = useParams();
  const chats = useSelector(state => state.chats.byIds);
  const messages = useSelector(state => state.messages.byIds);
  const classes = useStyles();

  const messageList = (chats[id]?.messageList ?? []).map(idx => messages[idx]);
  return (
    <div className={classes.list}>
      {messageList.map(({ id, author, message }) => (
        <Message key={id} author={author} message={message} />
      ))}
    </div>
  );
};

MessaheList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
}

export default MessaheList
