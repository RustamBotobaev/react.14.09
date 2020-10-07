import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Bob',
};

export const sessionSliceReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

export default sessionSliceReducer.reducer;
