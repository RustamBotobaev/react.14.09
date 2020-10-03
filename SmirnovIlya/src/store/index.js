import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from '../reducers/chatReducer';
import messagesReducer from '../reducers/messagesReducer';
import profileReducer from '../reducers/profileReducer'

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer
  },
});