import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import chatReducer from '../reducers/chatReducer';
import messageReducer from '../reducers/messageReducer';
import profileReducer from '../reducers/profileReducer';
import botAnswerMW from './botAnswerMW';

/**
 * Шаг2. Все наши reducers мы передаем в store
 */

export default configureStore({
  reducer: {
    chatsStore: chatReducer,
    messagesStore: messageReducer,
    profileStore: profileReducer,
  },
  middleware: [botAnswerMW, ...getDefaultMiddleware(), logger],
});
