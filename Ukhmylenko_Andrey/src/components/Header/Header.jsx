import React, { createRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getFullName from '../../selectors/profileSelectors';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Header.module.css';

const Header = () => {
  const fullName = useSelector(getFullName);
  const menuRef = createRef();

  const showMenu = () => {
    menuRef.current.classList.toggle(styles.header__menu_active);
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <button className={styles.header__button} type="button">
          <svg
            width="50"
            height="50"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              className={styles.header__button_icon}
              fill="white"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            />
          </svg>
        </button>
      </Link>
      <p className={styles.header__username}>{`${fullName}: чат с пользователем Bot`}</p>
      <button className={styles.header__button} type="button" onClick={showMenu}>
        <svg
          width="50"
          height="50"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-circle"
          className="svg-inline--fa fa-user-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            className={styles.header__button_icon}
            fill="white"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
          />
        </svg>
      </button>
      <div className={styles.header__menu} ref={menuRef}>
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
