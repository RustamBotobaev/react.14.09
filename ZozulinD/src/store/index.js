import { configureStore } from '@reduxjs/toolkit';

import messagesSlice from '../features/messages/messagesSlice';
import chatsSlice from '../features/chats/chatsSlice';
import profileSlice from '../features/profile/profileSlice';

import botAnswerMiddleware from '../middlewares/botAnswer';
import addMessageMiddleware from '../middlewares/addMessage';

const store = configureStore({
  reducer: {
    messages: messagesSlice,
    chats: chatsSlice,
    profile: profileSlice,
  },
  middleware: [addMessageMiddleware, botAnswerMiddleware],
});

export default store;
