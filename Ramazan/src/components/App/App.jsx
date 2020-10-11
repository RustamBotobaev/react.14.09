import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../../pages/RootRouter';
import store from '../../store';
import { Provider } from 'react-redux';
const theme = createMuiTheme();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
