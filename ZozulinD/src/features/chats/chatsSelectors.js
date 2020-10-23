import { createSelector } from '@reduxjs/toolkit';

const getChats = state => state.chats.chats;
const getChatsIDs = state => state.chats.chatIds;

export const getChatById = id => state => state.chats.chats[id];

export const getChatsList = createSelector(getChats, getChatsIDs, (chats, chatIds) =>
  chatIds.map(id => chats[id]),
);
