import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';

import { addMessage as addMessageToStore } from '../../features/messages/messagesSlice';

import MessageForm from './MessageForm';
import MessagesList from './MessagesList';
import getCurrentMessages from '../../features/messages/messagesSelectors';
import { getChatById } from '../../features/chats/chatsSelectors';

const Messages = () => {
  const { id: chatId } = useParams();
  const messages = useSelector(getCurrentMessages(chatId));
  const isChatExist = useSelector(getChatById(chatId));
  const dispatch = useDispatch();

  const addMessage = ({ author, message }) => {
    const newMessage = { id: uuid(), chatId, author, message };

    dispatch(addMessageToStore(newMessage));
  };

  if (!isChatExist) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MessageForm addMessage={addMessage} />
      <MessagesList messages={messages} />
    </>
  );
};

export default Messages;
