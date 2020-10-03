import { createSlice } from '@reduxjs/toolkit';

export const profile = createSlice({
  name: 'message',
  initialState: {
    Users: {
      1: {
        name: 'Антон',
      },
    },
    ids: [1,],
  },
  reducers: {
    profile(state, action) {},
  },
});

export const { profile } = profile.actions;

export default profile.reducer;
