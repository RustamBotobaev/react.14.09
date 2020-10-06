import {
    addMessage,
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
    if (type === addMessage.toString()) {
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