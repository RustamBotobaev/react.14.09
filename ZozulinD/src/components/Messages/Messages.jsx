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
  const { id } = useParams();
  const messages = useSelector(getCurrentMessages(id));
  const isChatExist = useSelector(getChatById(id));
  const dispatch = useDispatch();

  const addMessage = ({ author, message, chatId = id }) => {
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
