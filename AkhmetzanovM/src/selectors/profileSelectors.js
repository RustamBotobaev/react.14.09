export const getUserName = (state) => {
  return state.profile.userName;
};

export const getIsProfileFetching = (state) => {
  return state.profile.isFetching;
};
