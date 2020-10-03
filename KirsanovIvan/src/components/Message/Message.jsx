import React, { Component } from 'react';
import cn from 'classnames';
import { Box, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  message: {
    maxWidth: 320,
    wordWrap: 'break-word',
    marginBottom: 12,
    lineHeight: '24px',
    position: 'relative',
    padding: '10px 20px',
    borderRadius: 25,
  },

  author_bot: {
    background: '#E5E5EA',
    color: 'black',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: -2,
      height: 20,
      left: -7,
      borderLeft: '20px solid #E5E5EA',
      borderBottomRightRadius: '16px 14px',
      transform: 'translate(0, -2px)',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: -2,
      height: 20,
      left: 4,
      width: 26,
      background: '#cfe8fc',
      borderBottomRightRadius: 10,
      transform: 'translate(-30px, -2px)',
    },
  },
  author: {
    color: 'white',
    background: '#0B93F6',
    alignSelf: 'flex-end',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: -2,
      height: 20,
      right: -7,
      borderRight: '20px solid #0B93F6',
      borderBottomLeftRadius: '16px 14px',
      transform: 'translate(0, -2px)',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: -2,
      height: 20,
      right: -56,
      width: 26,
      background: '#cfe8fc',
      borderBottomLeftRadius: 10,
      transform: 'translate(-30px, -2px)',
    },
  },
};

class Message extends Component {
  render() {
    const { classes } = this.props;
    const { author, message } = this.props;
    return (
      <Box
        className={cn(classes.message, author === 'Bot' ? classes.author_bot : classes.author)}
      >
        {message}
      </Box>
    );
  }
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(Message);
