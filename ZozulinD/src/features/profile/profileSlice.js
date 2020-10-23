import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Dmitrii',
  },
  reducers: {
    setUserName: (_, { payload }) => {
      return { name: payload };
    },
  },
});

export const { setUserName } = profileSlice.actions;

export default profileSlice.reducer;
