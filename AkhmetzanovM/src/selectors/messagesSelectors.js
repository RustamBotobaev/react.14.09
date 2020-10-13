export const getCurrentMessages = (state, id) => {
  const chatsList = state.chats.chatsList;
  const messages = state.messages.messages;

  if (id in chatsList) {
    return chatsList[id].messagesIdList.map((messId) => messages[messId]);
  }
  return [];
};

export const getNewMessagesIds = (state) => state.messages.newMessagesIds;
