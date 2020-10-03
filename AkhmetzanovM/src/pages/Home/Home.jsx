import React from 'react';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <h1>Home Page</h1>
      <List>
        <Link to="/about">
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link to="/chat/1">
          <ListItem button>
            <ListItemText primary="Chats" />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default Home;
