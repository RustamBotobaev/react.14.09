import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    byIds: {
      1: { id: 1, title: 'Чат 1', messageList: [1] },
      2: { id: 2, title: 'Чат 2', messageList: [2] },
      3: { id: 3, title: 'Чат 3', messageList: [3] },
    },
    ids: [1, 2, 3],
  },
  reducers: {
    addChatToState: state => {
      const newId = uuidv4();
      state.byIds[newId] = { id: newId, title: `Чат ${newId}`, messageList: [] };
      state.ids.push(newId);
    },
  },
});

export const { addChatToState } = chatSlice.actions;

export default chatSlice.reducer;
