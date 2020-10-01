import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';

// Если прописывать так <Route path="/chats/:id" component={Chats} />,
// то автоматом передаются props (history, location, match, staticContext) в дочерний компонент
// (пример: Chats),
// а если пишем так <Route exact path="/"> <Home /> </Route>,
// то props не передаются!

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/chats/:id/" component={Chats} />
      <Route exact path="/about/">
        <About />
      </Route>
      <Route
        render={() => (
          <div>
            <h1>I am 404</h1>
          </div>
        )}
      />
    </Switch>
  );
};

export default RootRouter;
