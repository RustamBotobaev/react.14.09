import React from 'react';
import PropTypes from 'prop-types';
import ChatsWindow from '../ChatsWindow/ChatsWindow';
import DialogWindow from '../DialogWindow';
import styles from './MainWindow.module.css';

const MainWindow = props => {
  const { addMessage, messages, activeMessages } = props;

  return (
    <div className={styles.main_window}>
      <ChatsWindow />
      <DialogWindow
        addMessage={addMessage}
        messages={messages}
        activeMessages={activeMessages}
      />
    </div>
  );
};

MainWindow.propTypes = {
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

export default MainWindow;
