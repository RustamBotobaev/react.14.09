import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from '../reducers/chatReducer';
import messagesReducer from '../reducers/messagesReducer';

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
  },
});
