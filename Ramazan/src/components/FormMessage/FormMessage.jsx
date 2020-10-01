import React, { Component } from 'react';
import { Box, withStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const styles = {
  form: {
    display: 'flex',
  },
  sendBtn: {
    marginLeft: '16px',
    outline: 'none',
    background: 'transparent',
    border: '1px solid #3f51b5',
    width: '80px',
    height: '48px',
  },
};

class FormMessage extends Component {
  state = {
    author: 'Me',
    text: '',
  };

  /**
   * При нажатии на кнопку 'Send' как я понял данные которые я ввел записываются в state компонента FormMessage
    и передаются в addMessage в виде параметра в методе onSubmit (addMessage(this.state))

   * @param {*} e клик на кнопку 'Send'
   */
  onSubmit = e => {
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
    this.setState({
      text: [(this.state.text = '')],
    });
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { text } = this.state;
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <TextField
          id="textField"
          name="text"
          label="Author"
          onChange={this.onChange}
          value={text}
          autoComplete="off"
          fullWidth
        />
        <button type="submit" className={classes.sendBtn} onClick={this.clearField}>
          Send
        </button>
      </form>
    );
  }
}

export default withStyles(styles)(FormMessage);
