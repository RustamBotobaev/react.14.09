import React from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <h1>Home Page</h1>
      <List>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="About Page" />
          </ListItem>
        </Link>
        <Link to="/chats/1">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default Home;
