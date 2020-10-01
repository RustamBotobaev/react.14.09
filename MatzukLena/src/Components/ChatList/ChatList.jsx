import React from 'react';
import {
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
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import cn from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import mockChats from './mockChats';

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
                {mockChats.map(({ id, name }) => (
                    <NavLink key={id} to={`/chats/${id}`} activeClassName={classes.active}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </NavLink>
                ))}
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