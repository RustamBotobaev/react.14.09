import {
    createSlice
} from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        avatar: '',
        firstName: '',
        lastName: '',
        isFetching: false
    },
    reducers: {
        startFetch: state => {
            state.isFetching = true;
        },
        endFetch: state => {
            state.isFetching = false;
        },
        getProfile: (state, {
            payload
        }) => {
            return payload;
        },
    },
});

export const {
    getProfile,
    startFetch,
    endFetch
} = profileSlice.actions;

export const asyncGetProfile = () => async (dispatch, getState) => {
    try {
        dispatch(startFetch());

        const {
            data,
            status
        } = await callAPI('/profile');
        if (status === 200) {
            dispatch(getProfile(data));
        }
    } catch (e) {
        console.log(e);
        console.log('error interceptor');
    } finally {
        dispatch(endFetch());
    }
};

export default profileSlice.reducer;