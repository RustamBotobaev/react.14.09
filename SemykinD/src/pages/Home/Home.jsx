import React from 'react';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';

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
            <ListItemText primary="Chat 2" />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default Home;
