import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/fetcher';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
  const { data } = await callAPI('/profile');
  return data;
});

const initialState = {
  userName: '',
};

export const profileReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfile.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
    },
  },
});

export default profileReducer.reducer;
