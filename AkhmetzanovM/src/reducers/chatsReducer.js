import { v4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';
import { addMessage } from './messagesReducer';

const initialState = {
  chatsList: {},
  chatsIds: [],
};

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
  const { data } = await callAPI('/chats');
  return data;
});

export const chatsReducer = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat(state) {
      const newId = v4();
      state.chatsList[newId] = { id: newId, title: `New chat `, messagesIdList: [] };
      state.chatsIds.push(newId);
    },
  },
  extraReducers: {
    [addMessage]: (state, { payload }) => {
      const { currentChatId, id } = payload;

      state.chatsList[currentChatId].messagesIdList.push(id);
    },
    [fetchChats.fulfilled]: (state, { payload }) => {
      Object.values(payload).forEach((item) => {
        state.chatsList[item.id] = { ...item, messagesIdList: item.messagesIdList.map((id) => id) };
        state.chatsIds.push(item.id);
      });
    },
  },
});

export const { addChat } = chatsReducer.actions;

export default chatsReducer.reducer;
