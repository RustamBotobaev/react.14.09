import React from 'react';
import { Link as RRDLink } from 'react-router-dom';

import { ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    fontSize: '1rem',
    textDecoration: 'none',
    color: 'inherit',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  button: {
    padding: 0,
  },
}));

function Link(props) {
  const classes = useStyles();
  const { title, children } = props;

  return (
    <ListItem button className={classes.button}>
      <RRDLink {...props} className={classes.link}>
        <span>{title}</span>
        {children}
      </RRDLink>
    </ListItem>
  );
}

export default Link;
