import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
  const { data } = await callAPI('/profile');
  return data;
});

const initialState = {
  userName: '',
  isFetching: false,
};

export const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfile.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchProfile.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.userName = payload.name;
    },
  },
});

export default profileReducer.reducer;
