import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Message from '../Message';

const styles = theme => ({
  messageField: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    margin: theme.spacing(8),
    padding: theme.spacing(2),
    position: 'relative'
  },
});

const MessageList = ({ messages, classes }) => {
  return (
    <ul className={classes.messageField}>
      {messages.map(({ id, author, message }) => (
        <Message key={id} author={author} message={message} />
      ))}
    </ul>
  );
};

export default withStyles(styles)(MessageList); 
