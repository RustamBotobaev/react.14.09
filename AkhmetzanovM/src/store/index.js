import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import chatSliceReducer from '../reducers/chatReducer';
import sessionSliceReducer from '../reducers/sessionReducer';
import botAnswer from './botAnswer';

export default configureStore({
  reducer: {
    chats: chatSliceReducer,
    session: sessionSliceReducer,
  },
  middleware: [botAnswer, ...getDefaultMiddleware(), logger],
});
