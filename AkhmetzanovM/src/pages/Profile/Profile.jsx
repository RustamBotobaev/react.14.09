import React, { Component } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    return (
      <div>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => this.props.history.goBack()}>
              <ArrowBack />
            </IconButton>
            <Typography component="h2" variant="h6" color="inherit" noWrap>
              Профиль
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Profile;
