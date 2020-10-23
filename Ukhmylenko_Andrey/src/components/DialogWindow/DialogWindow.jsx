import React from 'react';
import PropTypes from 'prop-types';
import FormMessage from '../FormMessage';
import MessagesWindow from '../MessagesWindow';
import styles from './DialogWindow.module.css';

const DialogWindow = props => {
  const { messages, addMessage, activeMessages } = props;

  return (
    <div className={styles.dialog_window}>
      <MessagesWindow messages={messages} activeMessages={activeMessages} />
      <FormMessage addMessage={addMessage} />
    </div>
  );
};

DialogWindow.propTypes = {
  addMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
  activeMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DialogWindow;
