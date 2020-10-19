export const getChatsList = (state) => {
  const chatsList = state.chats.chatsList;
  const chatsIds = state.chats.chatsIds;
  if (chatsList) {
    return chatsIds.map((id) => chatsList[id]);
  }
  return [];
};

export const getChatTitleById = (state, chatId) => {
  if (chatId in state.chats.chatsList) {
    return state.chats.chatsList[chatId].title;
  }
  return '';
};

export const getChatById = (state, chatId) => {
  if (chatId in state.chats.chatsList) {
    return state.chats.chatsList[chatId];
  }
  return false;
};
