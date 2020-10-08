/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchChats, addMessage } from './chatReducer';

const messageAdapter = createEntityAdapter();

export const messageSelector = messageAdapter.getSelectors(state => state.messages);

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: messageAdapter.getInitialState({
    entities: {},
    ids: [],
    active: [],
  }),
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
      messageAdapter.upsertMany(state, payload.messageList);
    },
    [addMessage.fulfilled]: (state, { payload }) => {
      messageAdapter.addOne(state, payload);
    },
  },
});

export const { addNewMessageId, deleteNewMessageId } = messagesSlice.actions;

export default messagesSlice.reducer;
