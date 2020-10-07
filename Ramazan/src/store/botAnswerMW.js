import { v4 as uuidv4 } from 'uuid';
import { addMessage } from '../reducers/messageReducer';
import { botName } from '../utils/botName';

const botAnswer = ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if (type === addMessage.toString()) {
    const { author, chatId } = payload;
    if (author !== botName) {
      setTimeout(() => {
        dispatch(addMessage({ author: botName, text: 'Hello, I am bot', chatId, id: uuidv4() }));
      });
    }
  }
  return next(action);
};

export default botAnswer;
