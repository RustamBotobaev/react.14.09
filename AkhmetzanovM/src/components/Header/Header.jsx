import React from 'react';
import cn from 'classnames';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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

const Header = ({ currentChatId }) => {
  const classes = useStyles();

  const chatList = useSelector((store) => store.chats.chatsList);
  
  return (
    <AppBar position="absolute" className={cn(classes.appBar, classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
          {chatList[currentChatId].title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  currentChatId: PropTypes.string.isRequired,
};

export default Header;
