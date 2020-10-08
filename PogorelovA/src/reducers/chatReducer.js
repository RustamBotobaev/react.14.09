/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import callAPI from '../utils/fetcher';
import { getCurrentMessages } from '../selectors/messageSelectors';

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
  const { data } = await callAPI('/chats');
  return data;
});

export const postChat = createAsyncThunk('chats/postChats', async () => {
  const newId = uuidv4();
  const newChat = { id: newId, title: faker.name.title(), messageList: [] };
  const { data } = await callAPI.post('/chats', { ...newChat });
  return data;
});

export const deleteChat = createAsyncThunk('chats/deleteChat', async id => {
  await callAPI.delete(`/chats/${id}`);
  return id;
});

export const addMessage = createAsyncThunk(
  'chats/addMessage',
  async (messageData, { getState }) => {
    const { chatId, id, author, message } = messageData;
    const messages = getCurrentMessages(getState(), chatId);
    await callAPI.patch(`/chats/${chatId}`, {
      messageList: [...messages, { id, author, message }],
    });

    return messageData;
  },
);

const chatsAdapter = createEntityAdapter();

export const chatsSelector = chatsAdapter.getSelectors(state => state.chats);

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: chatsAdapter.getInitialState({
    entities: {},
    ids: [],
    isFetching: false,
  }),
  reducers: {
    addChatToState: state => {
      const newId = uuidv4();
      state.entities[newId] = { id: newId, title: `Чат ${newId}`, messageList: [] };
      state.ids.push(newId);
    },
  },
  extraReducers: {
    [fetchChats.pending]: state => {
      state.isFetching = true;
    },
    [fetchChats.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      chatsAdapter.upsertMany(
        state,
        payload.map(i => ({ ...i, messageList: i.messageList.map(msg => msg.id) })),
      );
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
      state.isFetching = false;
      const { id, chatId } = payload;
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
