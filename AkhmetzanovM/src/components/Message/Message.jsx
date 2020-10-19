import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import cn from 'classnames';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  message: {
    position: 'relative',
    display: 'flex',
    padding: theme.spacing(1, 1),
    marginTop: theme.spacing(1),
    marginRight: 'auto',
    maxWidth: 400,
    borderRadius: 8,
  },
  author: {
    color: theme.palette.primary.main,
    marginRight: 4,
  },
  user: {
    backgroundColor: theme.palette.divider,
  },
  otherusers: {
    backgroundColor: theme.palette.info.light,
  },
  highlight: {
    color: 'red',
    position: 'absolute',
    right: '-35px',
  },
}));

const Message = ({ message, userName, highlighted, deleteMessage, id }) => {
  const classes = useStyles();

  const onDeleteClick = (e) => {
    deleteMessage(e.currentTarget.getAttribute('id'));
  };

  return (
    <Box
      className={cn(classes.message, {
        [classes.user]: message.author === userName,
        [classes.otherusers]: message.author !== userName,
      })}
    >
      <Typography variant="subtitle1" component="h2" className={classes.author}>
        {message.author == userName ? 'Вы: ' : `${message.author}: `}
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {message.messageText}
      </Typography>
      <IconButton size="small" onClick={onDeleteClick} id={id}>
        <Close />
      </IconButton>
      <span className={classes.highlight}>{highlighted == true && 'new'}</span>
    </Box>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  highlighted: PropTypes.any.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

export default Message;
