export const getChatsList = (state) => {
  const chatsList = state.chats.chatsList;
  const chatsIds = state.chats.chatsIds;
  if (chatsList) {
    return chatsIds.map((id) => chatsList[id]);
  }
  return [];
};

export const getUserName = (state) => {
  return state.session.userName;
};

export const getNewMessagesIds = (state) => state.chats.newMessagesIds;

export const getCurrentMessages = (state, id) => {
  const chatsList = state.chats.chatsList;
  const messagesList = state.chats.messagesList;

  if (id in chatsList) {
    return chatsList[id].messagesIdList.map((messId) => messagesList[messId]);
  }
  return [];
};
