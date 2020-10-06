/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { BOT_NAME } from '../utils/constants';
import { fetchChats, addMessage } from './chatReducer';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    byIds: {
      1: {
        id: 1,
        author: BOT_NAME,
        message: 'Привет от бота',
      },
      2: {
        id: 2,
        author: BOT_NAME,
        message: 'Давай поболтаем',
      },
      3: {
        id: 3,
        author: BOT_NAME,
        message: 'Давай поболтаем, я в третьем чате',
      },
    },
    ids: [1, 2, 3],
    active: [],
  },
  reducers: {
    addNewMessageId(state, { payload }) {
      state.active.push(payload);
    },
    deleteNewMessageId(state, { payload }) {
      state.active = state.active.filter(i => i !== payload);
    },
  },
  extraReducers: {
    [fetchChats.fulfilled]: (state, { payload }) => {
      payload.forEach(item => {
        const { messageList } = item;
        messageList.forEach(i => {
          state.byIds[i.id] = i;
          state.ids.push(i.id);
        });
      });
    },
    [addMessage.fulfilled]: (state, { payload }) => {
      const { author, message, id } = payload;

      state.byIds[id] = { id, author, message };
      state.ids.push(id);
    },
  },
});

export const { addNewMessageId, deleteNewMessageId } = messagesSlice.actions;

export default messagesSlice.reducer;
