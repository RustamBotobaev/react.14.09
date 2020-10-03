import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from '../Layout';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout />
        </ThemeProvider>
    )
}

export default App;
