import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../reducers/chatReducer';
import messagesReducer from '../reducers/messagesReducer';

export default configureStore({
    reducer: {
        chats: chatReducer,
        messages: messagesReducer,
    }
});