import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  messageClass: {
    borderRadius: 4,
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
  author: {
    backgroundColor: theme.palette.primary.main,
    marginLeft: 'auto',
  },
  bot: {
    backgroundColor: theme.palette.primary.dark,
    marginRight: 'auto',
  },
  active: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const Message = ({ author, message, isActive }) => {
  const classes = useStyles();

  return (
    <Box
      component="li"
      className={cn(classes.messageClass, {
        [classes.author]: author !== 'Bot',
        [classes.bot]: author === 'Bot',
        [classes.active]: isActive,
      })}
    >
      <span>{`${author}: ${message}`}</span>
    </Box>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Message;
