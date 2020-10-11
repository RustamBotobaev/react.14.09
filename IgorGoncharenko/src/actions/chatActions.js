export const ADD_MESSAGE = 'chats/ADD_MESSAGE';
export const ADD_CHAT = 'chats/ADD_CHAT';

export const addMessageToState = data => ({
  type: ADD_MESSAGE,
  payload: data,
});

export const addChatToState = () => ({
  type: ADD_CHAT,
});
