import {createSlice} from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: "First User"
    },
});

export default profileSlice.reducer;