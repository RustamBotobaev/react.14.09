import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
});

class FormMessage extends Component {
  state = {
    author: '',
    message: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { author, message } = this.state;
    return (
      <form className={classes.root} onSubmit={this.onSubmit}>
        <TextField
          name="author"
          label="Author"
          onChange={this.onChange}
          value={author}
          autoComplete="off"
        />
        <TextField
          name="message"
          label="Message text"
          onChange={this.onChange}
          value={message}
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(FormMessage);
