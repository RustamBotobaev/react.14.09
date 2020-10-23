import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chats from '../Chats';
import Home from '../Home';
import Error404 from '../Error404';
import Profile from '../Profile';
import Settings from '../Settings';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chats/:id" component={Chats} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route render={() => <Error404 />} />
      {/* Ошибка 404 */}
    </Switch>
  );
};

export default RootRouter;
