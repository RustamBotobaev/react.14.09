import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About';
import Home from '../Home';
import Layout from '../../components/Layout';
import Chats from '../Chats';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chats" component={Chats} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default RootRouter;
