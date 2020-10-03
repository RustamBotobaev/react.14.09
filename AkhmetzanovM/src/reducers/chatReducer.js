import { v4 } from 'uuid';
import { ADD_CHAT, ADD_MESSAGE } from '../actions/chatAction';
import produce from 'immer';

const initialState = {
  chatList: {
    1: { id: 1, title: 'Chat 1', messageIdList: [1] },
    2: { id: 2, title: 'Chat 2', messageIdList: [2] },
  },
  chatIds: [1, 2],
  messageList: {
    1: { id: 1, author: 'BOT', messageText: 'Тут никого нет' },
    2: { id: 2, author: 'BOT', messageText: 'Тут тоже никого нет' },
  },
  userName: 'Bob',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Добавляет новый пустой чат в список
     */
    case ADD_CHAT: {
      const newId = v4();
      return produce(state, (draft) => {
        draft.chatList[newId] = { id: newId, title: `New chat1 `, messageIdList: [] };
        draft.chatIds.push(newId);
      });
    }
    /**
     * Добавляет сообщение в общий список
     * TODO отслеживать активный чат
     */
    case ADD_MESSAGE: {
      const newId = v4();
      return produce(state, (draft) => {
        draft.chatList[1].messageIdList.push(newId);
        draft.messageList[newId] = {
          id: newId,
          author: state.userName,
          messageText: action.payload,
        };
      });
    }
    default:
      return state;
  }
};

export default reducer;
