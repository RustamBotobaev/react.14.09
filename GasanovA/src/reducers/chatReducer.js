import { v4 as uuidv4 } from 'uuid';
import { ADD_CHAT, ADD_MESSAGE } from '../actions/chatActions';


const initialState = {
  byIds: {
    1: { id: 1, tittle: 'Чат 1', messageList: [1] },
    2: { id: 2, tittle: 'Чат 2', messageList: [2] },
    3: { id: 3, tittle: 'Чат 3', messageList: [3] },
  },
  ids: [1, 2, 3],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state };
    case ADD_CHAT: {
      const newID = uuidv4();
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [newID]: { id: newID, tittle: `Чат ${newID}`, messageList: [] },
        },
        ids: [...state.ids, newID],
      };
    }
    default:
      return state;
  }
};

export default reducer;




// import { createSlice } from '@reduxjs/toolkit';

// export const chatSlice = createSlice({
//   name: 'chat',
//   initialState: {
//     byIds: {
//       1: { id: 1, tittle: 'Чат 1', messageList: [1] },
//       2: { id: 2, tittle: 'Чат 2', messageList: [2] },
//       3: { id: 3, tittle: 'Чат 3', messageList: [3] },
//     },
//     ids: [1, 2, 3],
//   },
//   reducers: {
//     addChatToState(state = initialState, action) {
//       const newID = uuidv4();
//       return {
//         ...state,
//         byIds: {
//           ...state.byIds,
//           [newID]: { id: newID, tittle: `Чат ${newID}`, messageList: [] },
//         },
//         ids: [...state.ids, newID],
//       };
//     },
//   },
// });

// export const { addChatToState } = chatSlice.actions;

// export default chatSlice.reducer;
