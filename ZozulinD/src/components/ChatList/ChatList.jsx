import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Divider, Drawer, List, makeStyles } from '@material-ui/core';

import ChatListItem from './ChatListItem';

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    boxSizing: 'border-box',
    width: drawerWidth,
    position: 'relative',
    minHeight: '100vh',
  },
});

const ChatList = () => {
  const classes = useStyles();
  const chats = useSelector(state => state.messages.chats);

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List component="nav">
        <Link to="/addChat" title="Create chat" />
        <Divider />
        {Object.values(chats).map(({ chatId, chatName }) => {
          return <ChatListItem chatId={chatId} chatName={chatName} />;
        })}
      </List>
    </Drawer>
  );
};

export default ChatList;
