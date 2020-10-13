import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import chatsReducer from '../reducers/chatsReducer';
import messagesReducer from '../reducers/messagesReducer';
import sessionSliceReducer from '../reducers/sessionReducer';
import highlightMessage from './highlightMessage';

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
    session: sessionSliceReducer,
  },
  middleware: [highlightMessage, ...getDefaultMiddleware()],
});
