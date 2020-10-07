import { configureStore } from '@reduxjs/toolkit';
import chatSliceReducer from '../reducers/chatReducer';
import sessionSliceReducer from '../reducers/sessionReducer';

export default configureStore({
  reducer: {
    chats: chatSliceReducer,
    session: sessionSliceReducer,
  },
});
