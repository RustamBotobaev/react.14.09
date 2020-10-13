import {
  addMessage,
  addBlinkMessage,
  removeBlinkMessage,
} from '../features/messages/messagesSlice';
import { addMessageToChat } from '../features/chats/chatsSlice';

const addMessageMiddleware = ({ dispatch }) => next => ({ type, payload }) => {
  const res = next({ type, payload });

  if (type === addMessage.toString()) {
    dispatch(addMessageToChat({ chatId: payload.chatId, messageId: payload.id }));
    dispatch(addBlinkMessage(payload.id));
    setTimeout(() => dispatch(removeBlinkMessage(payload.id)), 2000);
  }

  return res;
};

export default addMessageMiddleware;
