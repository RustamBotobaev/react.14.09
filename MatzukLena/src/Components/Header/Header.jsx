import React from 'react';
import cn from 'classnames';
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { getAvatar, getFullName } from '../../selectors/profileSelectors';
import { useParams } from 'react-router-dom';
import { getChatTitle } from '../../selectors/chatsSelectors';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const { id } = useParams();

  const fullName = useSelector(getFullName);
  const chatTitle = useSelector(state => getChatTitle(state, id));
  const avatar = useSelector(getAvatar);

  return (
    <AppBar position="absolute" className={cn(classes.appBar, classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={cn(classes.menuButton, classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Avatar src={avatar} alt={fullName} />
        {!!fullName && (
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {`${fullName}'s chats`}
          </Typography>
        )}
        {!!chatTitle && (
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {chatTitle}
          </Typography>
        )}
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;