import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    v4 as uuidv4
} from 'uuid';
import faker from 'faker';
import callAPI from '../utils/fetcher';

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
    const {data} = await callAPI('/chats');
    return data;
});

export const postChat = createAsyncThunk('chats/postChats', async () => {
    const newId = uuidv4();
    const newChat = {
        id: newId,
        title: faker.name.title(),
        messageList: []
    };
    const {
        data
    } = await callAPI.post('/chats', {
        ...newChat
    });
    return data;
});

export const deleteChat = createAsyncThunk('chats/deleteChat', async id => {
    await callAPI.delete(`/chats/${id}`);
    return id;
});

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        byIds: {},
        ids: [],
        isFetching: false,
    },
    reducers: {
        addChatToState: (state, {
            payload
        }) => {
            const newId = uuidv4();
            state.byIds[newId] = {
                id: newId,
                title: `Чат ${newId}`,
                messageList: []
            };
            state.ids.push(newId);
        },
        // [addMessage]: (state, { payload }) => {
        //   const { id, chatId } = payload;
        //   state.byIds[chatId].messageList.push(id);
        // },
    },
    extraReducers: {
        [fetchChats.pending]: (state, {
            payload
        }) => {
            state.isFetching = true;
        },
        [fetchChats.fulfilled]: (state, {
            payload
        }) => {
            state.isFetching = false;
            payload.forEach(item => {
                state.byIds[item.id] = {
                    ...item,
                    messageList: item.messageList.map(({
                        id
                    }) => id)
                };
                state.ids.push(item.id);
            });
        },
        [postChat.pending]: state => {
            state.isFetching = true;
        },
        [postChat.fulfilled]: (state, {
            payload
        }) => {
            state.isFetching = false;
            state.byIds[payload.id] = payload;
            state.ids.push(payload.id);
        },
        [deleteChat.pending]: state => {
            state.isFetching = true;
        },
        [deleteChat.fulfilled]: (state, {
            payload
        }) => {
            state.isFetching = false;
            state.ids = state.ids.filter(i => i !== payload);
        },
    },
});

export const {
    addChatToState
} = chatsSlice.actions;

export default chatsSlice.reducer;