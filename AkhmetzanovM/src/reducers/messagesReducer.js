import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { BOT_NAME } from '../utils/constats';

const initialState = {
  messages: {
    1: { id: 1, author: BOT_NAME, messageText: 'Тут никого нет' },
    2: { id: 2, author: BOT_NAME, messageText: 'Тут тоже никого нет' },
  },
  messagesIds: [1, 2],
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
