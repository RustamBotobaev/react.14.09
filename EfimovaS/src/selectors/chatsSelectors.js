export const getCurrentChat = (state, id) => {
    const chats = state.chats.byIds;
    const chatsIds = state.chats.ids;

    return chatsIds.map(id => chats[id]);
};

export const getCurrentMessages = (state, id) => {
    //const currentChat = getCurrentChat(state, id);   
    const chats = state.chats.byIds;
    const messages = state.messages.byIds;
    if (id in chats) {
        return chats[id].messageList.map(messId => messages[messId]);
      }
    return [];
};