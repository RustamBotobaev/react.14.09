import { createSlice } from '@reduxjs/toolkit';

/**
 * Шаг1. С помощью createSlice мы можем объеденить reducers и actions в одном файле
 *
 */
export const profileReducer = createSlice({
  name: 'profile',
  initialState: {
    firstName: 'Ramazan',
    secondName: 'Ittiev',
  },
});

export default profileReducer.reducer;
