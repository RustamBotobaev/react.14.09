const getFullName = state => {
  const { firstName, lastName } = state.profile;
  return `${firstName} ${lastName}`;
};

export default getFullName;
