import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import chatsReducer from '../reducers/chatReducer';
import messagesReducer from '../reducers/messagesReducer';
import profileReducer from '../reducers/profileReducer';
import botAnswer from './botAnswer';

// const logger = ({ getState }) => next => action => {
//   console.log('prevState: ', getState());
//   console.log('action: ', action);
//   const result = next(action);
//   console.log('nextStore: ', getState());
//   return result;
// };

export default configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
  },
  middleware: [botAnswer, ...getDefaultMiddleware() /* , logger */],
});
