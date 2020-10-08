import { v4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { BOT_NAME } from '../utils/constats';

const initialState = {
  chatsList: {
    1: { id: 1, title: 'Chat 1', messagesIdList: [1, 2] },
    2: { id: 2, title: 'Chat 2', messagesIdList: [1] },
  },
  chatsIds: [1, 2],
  messagesList: {
    1: { id: 1, author: BOT_NAME, messageText: 'Тут никого нет' },
    2: { id: 2, author: BOT_NAME, messageText: 'Тут тоже никого нет' },
  },
  messagesIds: [1, 2],
  newMessagesIds: [],
};

export const chatSliceReducer = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChatToState(state) {
      const newId = v4();
      state.chatsList[newId] = { id: newId, title: `New chat1 `, messagesIdList: [] };
      state.chatsIds.push(newId);
    },
    addMessage(state, action) {
      const { currentChatId, messageText, author, id } = action.payload;

      state.chatsList[currentChatId].messagesIdList.push(id);
      state.messagesList[id] = {
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
  },
});

export const { addChatToState, addMessage, addNewMessageId, deleteNewMessageId } = chatSliceReducer.actions;

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

export default chatSliceReducer.reducer;
