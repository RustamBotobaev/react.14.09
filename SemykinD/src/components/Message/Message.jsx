import React, { Component } from 'react';
import cn from 'classnames';
import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';

class Message extends Component {
  // static propTypes = {
  //   text: PropTypes.object.isRequired,
  // };

  render() {
    return (
      <Box
        p={2}
        borderRadius="8px"
        border="1px black solid"
        color="text.primary"
        className={cn('list', {
          'author-bot': this.props.author === 'Bot',
          author: this.props.author !== 'Bot',
        })}
        bgcolor="info.main"
      >
        <div>{this.props.message}</div>
        <div>{this.props.author}</div>
      </Box>
    );
  }
}

export default Message;
