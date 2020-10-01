import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import cn from 'classnames';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  secondList: {
    marginTop: 'auto',
  },
}));

const ChatList = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper),
      }}
      open
    >
      <div className={classes.toolbarIcon}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Chat 3" />
        </ListItem>
      </List>
      <Divider className={classes.secondList} />
      <List>
        <ListSubheader inset>Saved reports</ListSubheader>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default ChatList;
