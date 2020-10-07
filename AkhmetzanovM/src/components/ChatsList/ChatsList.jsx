import React from 'react';
import cn from 'classnames';
import {
  Drawer,
  List,
  makeStyles,
  ListItemText,
  ListItem,
  OutlinedInput,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addChatToState } from '../../reducers/chatReducer';
import { getChatsList } from '../../selectors/chatsSelector';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 300,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    top: 0,
    position: 'fixed',
    zIndex: 1100,
    width: 299,
    backgroundColor: '#fff',
    ...theme.mixins.toolbar,
  },
  search: {
    height: 32,
    width: '100%',
  },
  list: {
    margin: theme.spacing(8, 0, 11, 0),
    boxSizing: 'border-box',
    height: '100vh',
  },
  menu: {
    bottom: 0,
    position: 'fixed',
    width: 299,
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
}));

const ChatsList = () => {
  const classes = useStyles();

  const chatsList = useSelector(getChatsList);
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
      <div className={classes.toolbar}>
        <OutlinedInput type="search" className={classes.search} placeholder="Найти чат" />
      </div>
      <List className={classes.list}>
        {chatsList.map(({ id, title }) => (
          <ListItem button key={id} component={NavLink} to={`/chat/${id}`} activeClassName="Mui-selected">
            <ListItemAvatar>
              <Avatar>{title[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <List className={classes.menu}>
        <ListItem button onClick={addChat}>
          <ListItemText primary="Добавить новый чат" />
        </ListItem>
        <ListItem button component={NavLink} to="/profile">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Профиль" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default ChatsList;
