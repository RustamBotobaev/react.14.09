import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  bot: {
    alignSelf: 'flex-start',
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    border: '2px solid #dedede',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: '5px;'
  },  
  author: {
    alignSelf: 'flex-end',
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    borderColor: '#ccc',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    borderRadius: '5px',    
  }
}));

const Message = ({ author, message }) => {
  const classes = useStyles();
  return (
    <div
      className={cn('list', {
        [classes.author]: author !== 'Bot',
        [classes.bot]: author === 'Bot',
      })}
    >
      <span>{`${author}: ${message}`}</span>
    </div>
  );

};

Message.propTypes ={
  author: PropTypes.string.isRequired, 
  message: PropTypes.string.isRequired, 
}

export default Message;
