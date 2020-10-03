import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'message',
  initialState: {
    byIds: {
      1: {
        id: 1,
        author: 'Bot',
        message: 'Привет от бота',
      },
      2: {
        id: 2,
        author: 'Bot',
        message: 'Давай поболтаем',
      },
      3: {
        id: 3,
        author: 'Bot',
        message: 'Давай поболтаем, я в третьем чате',
      },
    },
    ids: [1, 2, 3],
  },
  reducers: {
    addMessage(state, action) {},
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
