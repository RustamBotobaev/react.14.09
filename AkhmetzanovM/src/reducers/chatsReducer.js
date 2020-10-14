import { v4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';
import { addMessage, deleteMessage } from './messagesReducer';

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
  const { data } = await callAPI('/chats');
  return data;
});

export const postChat = createAsyncThunk('chats/postChats', async () => {
  const newId = v4();
  const newChat = { [newId]: { id: newId, title: `New chat `, messagesIdList: [] } };
  const { data } = await callAPI.post('/chats', { ...newChat });
  return data;
});

export const chatsReducer = createSlice({
  name: 'chats',
  initialState: {
    chatsList: {},
    chatsIds: [],
  },
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
      console.log(id, currentChatId);
      state.chatsList[currentChatId].messagesIdList.push(id);
    },
    [deleteMessage]: (state, { payload }) => {
      const messageId = payload;
      const { chatsList, chatsIds } = state;
      chatsIds.map((chatId) => {
        chatsList[chatId].messagesIdList = chatsList[chatId].messagesIdList.filter((item) => item != messageId);
      });
    },
    [fetchChats.fulfilled]: (state, { payload }) => {
      const { chatsList, chatsIds } = state;
      const chats = payload;

      if (!chatsIds.length) {
        Object.values(chats).forEach((item) => {
          chatsList[item.id] = { ...item, messagesIdList: item.messagesIdList.map((id) => id) };
          chatsIds.push(item.id);
        });
      }
    },
  },
});

export const { addChat } = chatsReducer.actions;

export default chatsReducer.reducer;
