import React from 'react';
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import mockChats from './mockChats';
import { useDispatch, useSelector } from 'react-redux';
import { addChatToState } from '../../actions/chatActions';
import { getCurrentChat } from '../../selectors/chatsSelectors';

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
    active: {
        textDecoration: 'none',
    },
}));

const ChatList = () => {
    const classes = useStyles();

    const chats = useSelector(getCurrentChat);
    const dispatch = useDispatch();

    const addChat = () => {
        dispatch(addChatToState());
    };

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
                {chats.map(({ id, title }) => (
                    <NavLink key={id} to={`/chats/${id}`} activeClassName={classes.active}>
                        <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                        </ListItem>
                    </NavLink>
                ))}                
            </List>
            <Button type="button" onClick={addChat}>add chat</Button>
            <Divider className={classes.secondList}/>
            <List>
                <div>
                    <ListSubheader inset>Settings</ListSubheader>
                    <Link to="/about">
                    <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                    </ListItem>
                    </Link>
                </div>
            </List>
        </Drawer>
    )
}

export default ChatList;
