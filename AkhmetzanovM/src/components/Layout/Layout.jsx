import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    height: '100vh',
    boxSizing: 'border-box',
  },
});

const Layout = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    list: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Layout);
