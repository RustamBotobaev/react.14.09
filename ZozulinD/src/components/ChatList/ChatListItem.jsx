import React from 'react';

import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { removeChat } from '../../features/chats/chatsSlice';

import Link from '../Router/Link';

function ChatListItem({ chatId, chatName }) {
  const dispatch = useDispatch();

  return (
    <Link to={`/chats/${chatId}`} title={chatName}>
      <IconButton onClick={() => dispatch(removeChat(chatId))}>
        <DeleteIcon style={{ color: '#333333' }} />
      </IconButton>
    </Link>
  );
}

export default ChatListItem;
