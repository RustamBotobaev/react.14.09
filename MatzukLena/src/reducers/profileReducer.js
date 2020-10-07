import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: { firstName: 'Elena', lastName: 'Matzuk' },
  reducers: {
    getProfile() {},
  },
});

export const { getProfile } = profileSlice;

export const asyncGetProfile = () => async dispatch => {
  try {
    const { data, status } = await fetch('who_am_i');
    if (status == 200) {
      localStorage.setItem('profile', data);
      dispatch(getProfile(data));
    }
  } catch (e) {
    console.log('error interceprto');
  }
};

export default profileSlice.reducer;