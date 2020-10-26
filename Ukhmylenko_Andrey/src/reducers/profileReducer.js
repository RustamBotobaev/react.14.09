import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: { firstName: 'Andrew', lastName: 'Matanov' },
  reducers: {
    getProfile() {},
  },
});

export const { getProfile } = profileSlice;

export const asyncGetProfile = () => async dispatch => {
  try {
    const { data, status } = await fetch('who_am_i');
    if (status === 200) {
      localStorage.setItem('profile', data);
      dispatch(getProfile(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export default profileSlice.reducer;
