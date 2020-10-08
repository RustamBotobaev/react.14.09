import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import chatSliceReducer from '../reducers/chatReducer';
import sessionSliceReducer from '../reducers/sessionReducer';
import highlightMessage from './highlightMessage';

export default configureStore({
  reducer: {
    chats: chatSliceReducer,
    session: sessionSliceReducer,
  },
  middleware: [highlightMessage, ...getDefaultMiddleware()],
});
