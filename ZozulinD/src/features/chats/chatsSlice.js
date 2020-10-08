import { v4 as uuid } from 'uuid';

import { createSlice } from '@reduxjs/toolkit';

const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    chats: {
      1: {
        chatName: 'Chat 1',
        chatId: 1,
        messages: [1],
      },
    },
    chatIds: [1],
  },
  reducers: {
    addChat: (chats, { payload: { chatName, chatId = uuid() } }) => {
      return {
        chats: {
          ...chats.chats,
          [chatId]: {
            chatName,
            chatId,
            messages: [],
          },
        },
        chatIds: [...chats.chatIds, chatId],
      };
    },
    addMessageToChat: ({ chats }, { payload: { messageId, chatId } }) => {
      chats[chatId].messages.push(messageId);
    },
    removeChat: ({ chats, chatIds }, { payload }) => {
      return {
        chats: { ...chats, [payload]: undefined },
        chatIds: [...chatIds.filter(id => id !== payload)],
      };
    },
  },
});

export const { addChat, addMessageToChat, removeChat } = chatsSlice.actions;

export default chatsSlice.reducer;
