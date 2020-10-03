import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootRouter from '../../pages/RootRouter/RootRouter';
import store from '../../store';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        subtitle1: {
        fontSize: 12,
        },
    },
    secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
    },

    palette: {
        primary: {
            main: '#4caf50',
        },
    },
    button: {
        fontStyle: 'italic',
        
    },

});

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