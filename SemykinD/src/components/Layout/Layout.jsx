import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import ChatList from '../ChatList';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  messageField: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    margin: theme.spacing(8),
    padding: theme.spacing(2),
    position: 'relative',
  },
});

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <ChatList />
      <Container maxWidth="md" classes={{ root: classes.messageField }}>
        {children}
      </Container>
    </div>
  );
};

export default withStyles(styles)(Layout);
