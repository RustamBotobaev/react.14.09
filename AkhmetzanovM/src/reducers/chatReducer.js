import { v4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatsList: {
    1: { id: 1, title: 'Chat 1', messagesIdList: [1, 2] },
    2: { id: 2, title: 'Chat 2', messagesIdList: [1] },
  },
  chatsIds: [1, 2],
  messagesList: {
    1: { id: 1, author: 'BOT', messageText: 'Тут никого нет' },
    2: { id: 2, author: 'BOT', messageText: 'Тут тоже никого нет' },
  },
  messagesIds: [1, 2],
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
    addMessageToState(state, action) {
      const { currentChatId, messageText, author } = action.payload;
      const newId = v4();
      state.chatsList[currentChatId].messagesIdList.push(newId);
      state.messagesList[newId] = {
        id: newId,
        author: author,
        messageText: messageText,
      };
      state.messagesIds.push(newId);
    },
  },
});

export const { addChatToState, addMessageToState } = chatSliceReducer.actions;

export default chatSliceReducer.reducer;
