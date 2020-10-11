import {
    addMessage
} from '../reducers/chatReducer';
import {
    addNewMessageId,
    deleteNewMessageId
} from '../reducers/messagesReducer';

const botAnswer = ({
    dispatch
}) => next => action => {
    const {
        type,
        payload
    } = action;
    if (type === addMessage.fulfilled) {
        const {
            id
        } = payload;
        dispatch(addNewMessageId(id));

        setTimeout(() => {
            dispatch(deleteNewMessageId(id));
        }, 2000);
    }
    return next(action);
};

export default botAnswer;
