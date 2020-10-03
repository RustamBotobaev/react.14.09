import React from 'react';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChatToState } from '../../actions/chatActions';

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
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
  active: {
    textDecoration: 'none',
  },
}));

const ChatList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const chats = useSelector(store => store.chats.byIds);
  const dispatch = useDispatch();
  const addChat = () => {
    dispatch(addChatToState());
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {Object.values(chats).map(({ id, tittle }) =>(
          <NavLink key={id} to={`/chats/${id}`} activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={tittle} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Button onClick={addChat}>add chats</Button>
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
