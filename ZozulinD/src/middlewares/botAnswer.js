import { v4 as uuid } from 'uuid';

import { addMessage } from '../features/messages/messagesSlice';

const botAnswerMiddleware = ({ dispatch }) => next => ({ type, payload }) => {
  const res = next({ type, payload });

  if (type === addMessage.toString() && payload.author !== 'Bot') {
    const botMessage = { id: uuid(), chatId: payload.chatId, author: 'Bot', message: 'Ok!' };

    setTimeout(() => dispatch(addMessage(botMessage)), 300);
  }

  return res;
};

export default botAnswerMiddleware;
