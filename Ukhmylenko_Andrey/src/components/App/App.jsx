import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import RootRouter from '../../pages/RootRouter';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
