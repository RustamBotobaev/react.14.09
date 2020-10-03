import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About';
import Home from '../Home';
import Chats from '../Chats';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chats/:id" component={Chats} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default RootRouter;
