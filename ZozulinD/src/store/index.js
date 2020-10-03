import { configureStore } from '@reduxjs/toolkit';

import messagesSlice from '../features/messages/messagesSlice';
import profileSlice from '../features/profile/profileSlice';

const store = configureStore({
  reducer: {
    messages: messagesSlice,
    profile: profileSlice,
  },
});

export default store;
