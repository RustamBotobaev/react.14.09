import { v4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';
import { addMessage } from './messagesReducer';


const initialState = {
  chatsList: {
    1: { id: 1, title: 'Chat 1', messagesIdList: [1, 2] },
    2: { id: 2, title: 'Chat 2', messagesIdList: [1] },
  },
  chatsIds: [1, 2],
};

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
    }
  }
});

export const { addChat } = chatsReducer.actions;

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
  const { data } = await callAPI('/chats');
  return data;
});

export default chatsReducer.reducer;
