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
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import cn from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChatToState } from '../../actions/chatActions';

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

  const chats = useSelector(store => store.chats.byIds);
  const dispatch = useDispatch();

  const addChat = () => {
    dispatch(addChatToState());
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
        {Object.values(chats).map(({ id, title }) => (
          <NavLink key={id} to={`/chats/${id}`} activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Button onClick={addChat}>add chats</Button>
      <Divider className={classes.secondList} />
      <List>
        <ListSubheader inset>Saved reports</ListSubheader>
        <Link to="/setting">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default ChatList;
