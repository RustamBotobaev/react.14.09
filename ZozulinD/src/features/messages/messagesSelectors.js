import { createSelector } from '@reduxjs/toolkit';

import { getChatById } from '../chats/chatsSelectors';

const getMessages = state => state.messages.messages;
// const getMessageIds = state => state.messages.messageIds;

const getCurrentMessages = id =>
  createSelector(getChatById(id), getMessages, (chat, messages) => {
    if (!chat) return [];
    return chat.messages.map(ID => messages[ID]);
  });

export default getCurrentMessages;
