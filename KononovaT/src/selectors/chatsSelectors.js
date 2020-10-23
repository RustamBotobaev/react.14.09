const getChatsById = state => state.chats.entities;

export const getCurrentMessages = (state, id) => {
    const chats = state.chats.entities;
    const messages = state.messages.entities;

    if (id in chats) {
        return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
};

export const getActiveMessages = store => store.messages.active;

export const getIsFetching = store => store.chats.isFetching;

export const getChatTitle = (store, id) => {
    const chatsById = getChatsById(store);
    if (id in chatsById) {
        return chatsById[id].title;
    }
    return '';
};