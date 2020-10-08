import { addMessage } from '../reducers/chatReducer';
import { BOT_NAME } from '../utils/constats';

const botAnswer = ({ dispatch }) => (next) => (action) => {
  const { type, payload } = action;
  if (type === addMessage.toString()) {
    const { currentChatId, author } = payload;
    if (author != BOT_NAME) {
      setTimeout(() => {
        dispatch(addMessage({ currentChatId: currentChatId, messageText: 'Ответ бота', author: BOT_NAME }));
      }, 500);
    }
  }
  return next(action);
};

export default botAnswer;
