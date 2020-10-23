import React, { useEffect } from 'react';

import { v4 as uuid } from 'uuid';

import { Divider, Drawer, List, makeStyles } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { getChatsList } from '../../features/chats/chatsSelectors';
import { addChat } from '../../features/chats/chatsSlice';
import { addMessage } from '../../features/messages/messagesSlice';

import ChatListItem from './ChatListItem';
import Link from '../Router/Link';

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

const fetchData = () => fetch('http://localhost:3004/chats').then(d => d.json());

const ChatList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const chats = useSelector(getChatsList);

  const asyncFetchData = async () => {
    const data = await fetchData();
    data.forEach(item => {
      dispatch(addChat({ chatName: item.title, chatId: item.id }));

      item.messageList.forEach(({ author, message }) => {
        const newMessage = { id: uuid(), chatId: item.id, author, message };
        dispatch(addMessage(newMessage));
      });
    });
  };

  useEffect(() => {
    asyncFetchData();
  }, []);

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
          return <ChatListItem chatId={chatId} chatName={chatName} key={chatId} />;
        })}
      </List>
    </Drawer>
  );
};

export default ChatList;
