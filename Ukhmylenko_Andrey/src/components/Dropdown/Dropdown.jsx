import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  return (
    <>
      <div className="main__links">
        <Link className={styles.link} to="/profile">
          Профиль
        </Link>
        <Link className={styles.link} to="/settings">
          Настройки
        </Link>
      </div>
      <div className="bottom__link">
        <hr className={styles.divider} />
        <Link className={cn(styles.link, styles.logout_link)} to="/">
          Выйти
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
