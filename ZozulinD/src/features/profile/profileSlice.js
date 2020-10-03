import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Dmitrii',
  },
});

export default profileSlice.reducer;
