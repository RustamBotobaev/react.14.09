import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Authentification.module.css';

const Authentification = () => {
  return (
    <div className={styles.authentification}>
      <Link className={styles.link} to="/chats/1">
        Вход в чат
      </Link>
    </div>
  );
};

export default Authentification;
