import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Message.module.css';
import botImage from '../../assets/bot.jpg';
import humanImage from '../../assets/profile.svg';

const Message = props => {
  const { author, message, isActive } = props;
  return (
    <li
      className={cn(
        styles.message,
        author === 'Bot' ? styles.message__bot : styles.message__human,
        isActive && styles.message__active,
      )}
    >
      <img
        className={styles.message__userpic}
        src={author === 'Bot' ? botImage : humanImage}
        alt="userpic"
      />
      <p
        className={cn(
          styles.message__content,
          author === 'Bot' ? styles.message__content_bot : styles.message__content_human,
        )}
      >
        {`${author}: ${message}`}
      </p>
    </li>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Message;
