import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import { makeStyles, Container, Typography } from '@material-ui/core';

import store from '../../store';

import ChatList from '../ChatList';
import CreateChat from '../ChatList/CreateChat';
import Header from '../Header';
import Profile from '../Profile';
import Messages from '../Messages';
import Router from '../Router';

const useStyles = makeStyles({
  container: {
    marginTop: 64,
  },
});

const Layout = () => {
  const classes = useStyles();

  return (
    <Router>
      <Provider store={store}>
        <Header />
        <ChatList />
        <Container className={classes.container}>
          <Switch>
            <Route exact path="/">
              <Typography variant="h2" component="h1">
                ChatBot app!
              </Typography>
            </Route>
            <Route path="/chats/:id">
              <Messages />
            </Route>
            <Route path="/addChat">
              <CreateChat />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
};

export default Layout;
