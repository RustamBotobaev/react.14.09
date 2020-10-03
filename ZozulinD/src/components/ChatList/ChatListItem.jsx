import React from 'react';
import { Link } from 'react-router-dom';

function ChatListItem({ chatId, chatName }) {
  return <Link to={`/chats/${chatId}`} title={chatName} key={chatId} />;
}

export default ChatListItem;
