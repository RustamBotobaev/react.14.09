import { createSelector } from '@reduxjs/toolkit';

const getChatsById = (state) => state.chats.chatsList;
const getChatsIDs = (state) => state.chats.chatsIds;

export const getChatsList = createSelector(getChatsById, getChatsIDs, (chatsList, chatsIds) =>
  chatsIds.map((id) => chatsList[id]),
);

export const getCurrentMessages = (state, id) => {
  const chatsList = state.chats.chatsList;
  const messagesList = state.chats.messagesList;

  if (id in chatsList) {
    return chatsList[id].messagesIdList.map((messId) => messagesList[messId]);
  }
  return [];
};
