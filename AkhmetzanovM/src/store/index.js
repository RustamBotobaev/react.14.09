import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import chatsReducer from '../reducers/chatsReducer';
import messagesReducer from '../reducers/messagesReducer';
import profileReducer from '../reducers/profileReducer';
import highlightMessage from './highlightMessage'; 

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
    session: profileReducer,
  },
  middleware: [highlightMessage, ...getDefaultMiddleware()],
});
