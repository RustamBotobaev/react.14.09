export const getCurrentMessages = (state, id) => {
  const chatsList = state.chats.chatsList;
  const messages = state.messages.messages;

  if (id in chatsList && id in messages) {
    return chatsList[id].messagesIdList.map((messageId) => messages[messageId]);
  }
  return [];
};

export const getNewMessagesIds = (state) => state.messages.newMessagesIds;
