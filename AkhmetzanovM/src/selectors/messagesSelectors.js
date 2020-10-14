export const getCurrentMessages = (state, chatId) => {
  const chatsList = state.chats.chatsList;
  const chatsIds = state.chats.chatsIds;
  const messages = state.messages.messages;

  if (chatId in chatsIds) {
    return chatsList[chatId].messagesIdList.map((messageId) => messages[messageId]);
  }
  return [];
};

export const getNewMessagesIds = (state) => state.messages.newMessagesIds;
