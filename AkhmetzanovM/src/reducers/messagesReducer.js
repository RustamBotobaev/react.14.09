import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { BOT_NAME } from '../utils/constats';
import callAPI from '../utils/fetcher';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const { data } = await callAPI('/messages');
  return data;
});

const initialState = {
  messages: {},
  messagesIds: [],
  newMessagesIds: [],
};

export const messagesReducer = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, { payload }) {
      const { messageText, author, id } = payload;

      state.messages[id] = {
        id: id,
        author: author,
        messageText: messageText,
      };
      state.messagesIds.push(id);
    },
    addNewMessageId(state, { payload }) {
      state.newMessagesIds.push(payload);
    },
    deleteNewMessageId(state, { payload }) {
      state.newMessagesIds = state.newMessagesIds.filter((item) => item !== payload);
    },

    deleteMessage(state, { payload }) {
      const { currentChatId, id } = payload;
      const index = state.chatsList[currentChatId].messagesIdList.indexOf(id);
      if (index > -1) {
        state.chatsList[currentChatId].messagesIdList.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [fetchMessages.fulfilled]: (state, { payload }) => {
      Object.values(payload).forEach((item) => {
        state.messages[item.id] = { ...item };
        state.messagesIds.push(item.id);
      });
    },
  },
});

export const { addMessage, addNewMessageId, deleteNewMessageId } = messagesReducer.actions;

export const asyncAddMessage = (payload) => (dispatch) => {
  const { author, currentChatId } = payload;
  const newId = v4();

  if (author != BOT_NAME) {
    setTimeout(() => {
      dispatch(addMessage({ currentChatId: currentChatId, messageText: 'Ответ бота', author: BOT_NAME, id: newId }));
    }, 500);
  }

  dispatch(addMessage(payload));
};

export default messagesReducer.reducer;
