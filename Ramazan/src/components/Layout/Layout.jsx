import React from 'react';
import { Container, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from '../Header';
import ChatList from '../ChatList';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(9),
  },
  // chat: {
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   padding: '80px 16px 8px 8px',
  // },
  // chat__list: {
  //   listStyleType: 'none',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  //   padding: '0 24px 24px',
  // },
});

// {children} - это компонент, который мы передали в RootRouter в компонент Route
// какой то из этих:

// <Route exact path="/">
//   <Home />
// </Route>

// <Route path="/chats/:id" component={Chats} />

// <Route path="/about">
//  <About />
// </Route>

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      <Container maxWidth="md" classes={{ root: classes.container }}>
        {children}
      </Container>
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
