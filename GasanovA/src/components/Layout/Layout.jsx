import React from 'react';
import PropTypes from 'prop-types';
import { Container, withStyles } from '@material-ui/core';
import Header from '../Header';
import ChatList from '../ChatList';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  container: {
    marginTop: theme.spacing(12),
  },
});

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      <Container className={classes.container}>{children}</Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    container: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Layout);
