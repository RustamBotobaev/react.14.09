import React from 'react';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CancelIcon from '@material-ui/icons/Cancel';
import cn from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector, deleteChat, postChat } from '../../reducers/chatReducer';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  secondList: {
    marginTop: 'auto',
  },
  active: {
    textDecoration: 'none',
  },
}));

const ChatList = () => {
  const classes = useStyles();

  const chats = useSelector(chatsSelector.selectAll);
  const dispatch = useDispatch();

  const addChat = () => {
    dispatch(postChat());
  };

  const removeChat = id => {
    dispatch(deleteChat(id));
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper),
      }}
      open
    >
      <div className={classes.toolbarIcon}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {chats.map(({ id, title }) => (
          <NavLink key={id} to={`/chats/${id}`} activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
            <IconButton onClick={() => removeChat(id)}>
              <CancelIcon />
            </IconButton>
          </NavLink>
        ))}
      </List>
      <Button onClick={addChat}>add chats</Button>
      <Divider className={classes.secondList} />
      <List>
        <ListSubheader inset>Saved reports</ListSubheader>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default ChatList;
