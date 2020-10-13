import React from 'react';
import cn from 'classnames';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  appBarShift: {
    marginLeft: 300,
    width: 'calc(100% - 300px)',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ currentChatTitle }) => {
  const classes = useStyles();

   return (
    <AppBar position="absolute" className={cn(classes.appBar, classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          {currentChatTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  currentChatTitle: PropTypes.string.isRequired,
};

export default Header;
