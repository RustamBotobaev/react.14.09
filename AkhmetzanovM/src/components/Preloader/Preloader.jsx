import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Preloader = ({ open }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Preloader.defaultProps = {
  open: false,
};

Preloader.propTypes = {
  open: PropTypes.bool,
};

export default memo(Preloader);
