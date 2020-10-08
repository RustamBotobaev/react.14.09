import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import { Box, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        listStyle: 'none',
        margin: 0,
        maxHeight: 200,
        overflow: 'auto',
        padding: theme.spacing(4),
        border: '1px solid #1976d2',
        borderRadius: 12,
    },
}));

let listRef;

const MessageList = ({ messages }) => {
    const classes = useStyles();
    /* const { id } = useParams();
    const chats = useSelector(state => state.chats.byIds);
    const messagesFromRedux = useSelector(state => state.messages.byIds);

    const messages = (chats[id]?.messageList ?? []).map(idx => messagesFromRedux[idx]); */

    listRef = useRef();

    useEffect(() => {
        const { current } = listRef;
        if(current) {
            current.scrollTo(0, 0);
        }
    }, [messages])

    return (
        <Box ref={listRef} component="ul" className={classes.list}> 
            {messages.map(({ id, author, message }) => (
                <Message key={id} author={author} message={message} />
            ))}
        </Box>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            message: PropTypes.string,
        }),
    ).isRequired,
}

export default MessageList
