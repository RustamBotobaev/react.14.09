import { handleAction } from 'redux-actions';

const initReducer = {
    name: 'Lena',
    lastName: 'Matzuk',
};

const reducer = handleAction('', state => state, initReducer);

export default reducer;