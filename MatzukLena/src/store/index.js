import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import chatsReducer from '../reducers/chatReducer';
import messagesReducer from '../reducers/messagesReducer';
import profileReducer from '../reducers/profileReducer';
import botAnswer from './botAnswer';


export default configureStore({
    reducer: {
        chats: chatsReducer,
        messages: messagesReducer,
        profile: profileReducer,
    },
    middleware: [botAnswer, ...getDefaultMiddleware()],
});