/**
 * Шаг3. getUsersName - selector, для того что бы передать измененный state из store нашему компоненту 
 * @param {} state - это state из нашего reducer (profileReducer)
 * initialState: {
    firstName: 'Ramazan',
    secondName: 'Ittiev',
  } 
 */
export const getUsersName = state => {
  const { firstName, secondName } = state.profileStore;
  return `${firstName} ${secondName}`;
};
