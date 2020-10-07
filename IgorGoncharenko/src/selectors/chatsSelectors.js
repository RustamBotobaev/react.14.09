import { createSelector } from '@reduxjs/toolkit';

const getChatsById = state => state.chats.byIds;
const getChatsIDs = state => state.chats.ids;

export const getChatsList = createSelector(getChatsById, getChatsIDs, (byId, ids) =>
  ids.map(id => byId[id]),
);

export const getCurrentMessages = (state, id) => {
  const chats = state.chats.byIds;
  const messages = state.messages.byIds;

  if (id in chats) {
    return chats[id].messageList.map(messId => messages[messId]);
  }
  return [];
};
