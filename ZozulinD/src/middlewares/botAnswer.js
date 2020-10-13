import { v4 as uuid } from 'uuid';

import { addMessage } from '../features/messages/messagesSlice';

const botAnswerMiddleware = ({ dispatch, getState }) => next => ({ type, payload }) => {
  const res = setTimeout(() => next({ type, payload }), 0);

  const userName = getState().profile.name;

  if (type === addMessage.toString() && payload.author === userName) {
    const botMessage = { id: uuid(), chatId: payload.chatId, author: 'Bot', message: 'Ok!' };

    setTimeout(() => dispatch(addMessage(botMessage)), 300);
  }

  return res;
};

export default botAnswerMiddleware;
