import { v4 as uuid } from 'uuid';

import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: {
      1: {
        id: uuid(),
        author: 'Bot',
        message: 'Hello Chat 1',
        isActive: false,
      },
    },
    messageIds: [1],
  },
  reducers: {
    addMessage: ({ messages, messageIds }, { payload: { id, author, message } }) => {
      return {
        messages: {
          ...messages,
          [id]: {
            id,
            author,
            message,
            isActive: false,
          },
        },
        messageIds: [...messageIds, id],
      };
    },
    addBlinkMessage: ({ messages }, { payload }) => {
      messages[payload].isActive = true;
    },
    removeBlinkMessage: ({ messages }, { payload }) => {
      messages[payload].isActive = false;
    },
  },
});

export const { addMessage, addBlinkMessage, removeBlinkMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
