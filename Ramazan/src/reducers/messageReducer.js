import { v4 as uuidv4 } from 'uuid';

import { createSlice } from '@reduxjs/toolkit';
import { botName } from '../utils/botName';

export const messagesSlice = createSlice({
  name: 'text',
  initialState: {
    byIds: {
      1: {
        id: 1,
        author: botName,
        text: 'Привет от бота',
      },
      2: {
        id: 2,
        author: botName,
        text: 'Давай поболтаем',
      },
      3: {
        id: 3,
        author: botName,
        text: 'Давай поболтаем, я в третьем чате',
      },
    },
    ids: [1, 2, 3],
    // active: [],
  },
  reducers: {
    addMessage(state, action) {
      const { author, text, id } = action.payload;

      state.byIds[id] = { id, author, text };
      state.ids.push(id);
    },
    // addNewMessageId(state, { payload }) {
    //   state.active.push(payload);
    // },
  },
});

export const { addMessage } = messagesSlice.actions;

// export const asyncAddMessage = payload => (dispatch, getState) => {
//   const { author, chatId } = payload;

//   if (author !== botName) {
//     setTimeout(() => {
//       dispatch(addMessage({ author: botName, text: 'Привет от бота', chatId, id: uuidv4() }));
//     }, 500);
//   }

//   dispatch(addMessage(payload));
// };
export default messagesSlice.reducer;
