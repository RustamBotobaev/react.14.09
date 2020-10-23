import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, makeStyles, Typography } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from '../../features/profile/profileSlice';

const useStyles = makeStyles(theme => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: 'calc(100% - 240px)',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const fetchData = () => fetch('http://localhost:3004/profile').then(d => d.json());

const Header = () => {
  const classes = useStyles();
  const { name } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const asyncFetchData = async () => {
    const { firstName, lastName } = await fetchData();
    dispatch(setUserName(`${firstName} ${lastName}`));
  };

  useEffect(() => {
    asyncFetchData();
  }, []);

  return (
    <AppBar className={classes.appBar}>
      <Typography variant="h6" className={classes.title}>
        <Link to="/" className={classes.link}>
          ChatBot
        </Link>
      </Typography>
      <Button color="inherit">
        <Link to="/profile" className={classes.link}>
          {name}
        </Link>
      </Button>
    </AppBar>
  );
};

export default Header;
