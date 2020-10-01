import { v4 as uuidv4 } from 'uuid';
import { ADD_CHAT } from '../actions/chatActions';
import { addMessage } from './messagesReducer';

const initialState = {
  byIds: {
    1: { id: 1, title: 'Чат 1', messageList: [1, 2] },
    2: { id: 2, title: 'Чат 2', messageList: [3, 2] },
    3: { id: 3, title: 'Чат 3', messageList: [2, 3] },
  },
  ids: [1, 2, 3],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      const newId = uuidv4();
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [newId]: { id: newId, title: `Чат ${newId}`, messageList: [] },
        },
        ids: [...state.ids, newId],
      };
    }
    case addMessage.toString():
      console.log('ACTION FROM CHAT REDUCER');
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
