/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { normalize, schema } from 'normalizr';
import callAPI from '../utils/fetcher';
import { getCurrentMessages } from '../selectors/chatsSelectors';

const chatsAdapter = createEntityAdapter();

export const chatsSelector = chatsAdapter.getSelectors(state => state.chats);

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
  const { data } = await callAPI('/chats');
  const msgSchema = new schema.Entity('messageList');
  const chatsSchema = new schema.Entity('chats', { messageList: [msgSchema] });
  const result = normalize(
    { chats: data },
    {
      chats: [chatsSchema],
    },
  );
  return result.entities;
});

export const postChat = createAsyncThunk('chats/postChats', async () => {
  const newId = uuidv4();
  const newChat = { id: newId, title: `Chat ${newId}`, messageList: [] };
  const { data } = await callAPI.post('/chats', { ...newChat });
  return data;
});

export const deleteChat = createAsyncThunk('chats/deleteChat', async id => {
  await callAPI.delete(`/chats/${id}`);
  return id;
});

export const addMessage = createAsyncThunk(
  'chats/patchChat',
  async (messageData, { getState }) => {
    const { chatId, author, message, id } = messageData;
    const messages = getCurrentMessages(getState(), chatId);
    await callAPI.patch(`/chats/${chatId}`, {
      messageList: [...messages, { author, message, id }],
    });
    return messageData;
  },
);

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: chatsAdapter.getInitialState({
    isFetching: false,
  }),
  reducers: {},
  extraReducers: {
    [fetchChats.pending]: state => {
      state.isFetching = true;
    },
    [fetchChats.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      chatsAdapter.upsertMany(state, payload.chats);
    },
    [postChat.pending]: state => {
      state.isFetching = true;
    },
    [postChat.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      chatsAdapter.addOne(state, payload);
    },
    [addMessage.pending]: state => {
      state.isFetching = true;
    },
    [addMessage.fulfilled]: (state, { payload }) => {
      const { id, chatId } = payload;
      state.isFetching = false;
      state.entities[chatId].messageList.push(id);
    },
    [deleteChat.pending]: state => {
      state.isFetching = true;
    },
    [deleteChat.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      chatsAdapter.removeOne(state, payload);
    },
  },
});

export const { addChatToState } = chatsSlice.actions;

export default chatsSlice.reducer;
