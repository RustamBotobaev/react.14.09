import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../../pages/RootRouter';

const theme = createMuiTheme();

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
