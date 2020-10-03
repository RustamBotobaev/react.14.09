import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';
import Profile from '../Profile';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/chat/:id" component={Chats}></Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default RootRouter;
