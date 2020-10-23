import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChatToState } from '../../actions/chatActions';
import bot from '../../assets/bot.jpg';
import styles from './ChatsWindow.module.css';

const ChatsWindow = () => {
  const chats = useSelector(store => store.chats.byIds);
  const dispatch = useDispatch();

  const addChat = () => {
    dispatch(addChatToState());
  };

  return (
    <div className={styles.chatswindow}>
      <div className={styles.chatwindow__links}>
        {Object.values(chats).map(({ id, title }) => (
          <NavLink
            key={id}
            to={`/chats/${id}`}
            className={styles.chatlink}
            activeClassName={styles.chatlink__active}
          >
            <img
              className={styles.chatlink__userpic}
              src={bot}
              alt="Bot"
              width="65"
              height="65"
            />
            <p className={styles.chatlink__username}>{title}</p>
          </NavLink>
        ))}
      </div>
      <button className={styles.chatswindow__addchat} type="button" onClick={addChat}>
        +НОВЫЙ ДИАЛОГ
      </button>
    </div>
  );
};

export default ChatsWindow;
