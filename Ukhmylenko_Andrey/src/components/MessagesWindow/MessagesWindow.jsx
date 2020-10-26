import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import styles from './MessagesWindow.module.css';

const MessagesWindow = props => {
  const { messages, activeMessages } = props;
  return (
    <ul className={styles.messages_window}>
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
        <p>Напишите ваше первое сообщение этому собеседнику!</p>
      )}
    </ul>
  );
};

MessagesWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
  activeMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MessagesWindow;
