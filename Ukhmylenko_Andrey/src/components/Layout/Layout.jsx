import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

const Layout = props => {
  const { children } = props;
  return <div className={styles.layout}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Layout;
