export const getCurrentMessages = (state, id) => {
  const chats = state.chats.entities;
  const messages = state.messages.byIds;

  if (id in chats) {
    return chats[id].messageList.map(messId => messages[messId]);
  }
  return [];
};
