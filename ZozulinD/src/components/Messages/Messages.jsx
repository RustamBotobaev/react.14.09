import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';

import { addMessage as addMessageToStore } from '../../features/messages/messagesSlice';

import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

const Messages = () => {
  const { id: chatId } = useParams();
  const chat = useSelector(state => state.messages.chats[chatId]);
  const dispatch = useDispatch();

  const addMessage = ({ author, message }) => {
    const newMessage = { id: uuid(), chatId, author, message };

    dispatch(addMessageToStore(newMessage));
  };

  useEffect(() => {
    const { messages } = chat;
    const lastMessage = messages[messages.length - 1];

    if (lastMessage.author !== 'Bot') {
      setTimeout(() => addMessage({ author: 'Bot', message: 'Ok!' }), 300);
    }
  });

  if (!chat) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MessageForm addMessage={addMessage} />
      <MessagesList messages={chat.messages} />
    </>
  );
};

export default Messages;
