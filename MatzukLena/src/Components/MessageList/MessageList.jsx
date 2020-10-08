import React, { useEffect, useRef } from 'react';
import Message from "../Message";
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        margin: 0,
        border: '1px solid #333',
        width: '100%',
        padding: theme.spacing(4),
        borderRadius: 12,
    },
}));
    let listRef;

const MessageList = ({ messages, activeMessages}) => {
    const classes = useStyles();
    listRef = useRef();

    // useEffect(() => {
    //     const { current } = listRef;
    //     if (current) {
    //       current.scrollTo(messages.length * 36, 0);
    //     }
    //   }, [messages]);

    return (
        <Box ref={listRef} component="ul" className={classes.list}>
      {messages.length ? (
        messages.map(({ id, author, message }) => (
          <Message key={id} author={author} message={message} isActive={activeMessages.includes(id)}/>
        ))
      ) : (
        <Typography>Здесь ещё нет сообщений</Typography>
      )}
    </Box>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape ({
         id: PropTypes.string,
         author: PropTypes.string,
         message: PropTypes.string,
    })).isRequired ,
    activeMessages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
}

export default MessageList;