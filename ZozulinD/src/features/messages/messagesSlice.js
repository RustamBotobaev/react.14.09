import { v4 as uuid } from 'uuid';

import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    chats: {
      1: {
        chatName: 'Chat 1',
        chatId: 1,
        messages: [
          {
            id: uuid(),
            author: 'Bot',
            message: 'Hello Chat 1',
          },
        ],
      },
      2: {
        chatName: 'Chat 2',
        chatId: 2,
        messages: [
          {
            id: uuid(),
            author: 'Bot',
            message: 'Hello Chat 2',
          },
        ],
      },
      3: {
        chatName: 'Chat 3',
        chatId: 3,
        messages: [
          {
            id: uuid(),
            author: 'Bot',
            message: 'Hello Chat 3',
          },
        ],
      },
    },
    chatIds: [1, 2, 3],
  },
  reducers: {
    addMessage: (state, action) => {
      const newMessage = action.payload;
      const { messages } = state.chats[newMessage.chatId];

      const { chatId, ...data } = newMessage;

      messages.push(data);
    },
    addChat: (state, action) => {
      const { chats, chatIds } = state;
      const { chatName } = action.payload;

      const newId = chatIds[chatIds.length - 1] + 1;

      return {
        chats: {
          ...chats,
          [newId]: {
            chatName,
            chatId: newId,
            messages: [
              {
                id: uuid(),
                author: 'Bot',
                message: `Hello ${chatName}`,
              },
            ],
          },
        },
        chatIds: [...chatIds, newId],
      };
    },
  },
});

export const { addMessage, addChat } = messagesSlice.actions;

export default messagesSlice.reducer;
