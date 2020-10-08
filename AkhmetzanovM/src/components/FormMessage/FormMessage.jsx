import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, OutlinedInput, withStyles } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { asyncAddMessage } from '../../reducers/chatReducer';

const styles = (theme) => ({
  root: {
    backgroundColor: '#fff',
    margin: theme.spacing(0),
    padding: theme.spacing(2),
    bottom: 0,
    position: 'fixed',
    marginLeft: 300,
    boxSizing: 'border-box',
    width: 'calc(100% - 300px)',
  },
});

class FormMessage extends Component {
  state = {
    messageText: '',
  };

  inputRef = createRef();

  /**
   * Сохраняет в state значение введённое в текстовое поле
   * @param inputEl
   */
  onInputChange = (inputEl) => {
    this.setState({ messageText: inputEl.target.value });
  };

  /**
   * Ставит фокус на поле для ввода сообщения. Нужно чтобы постоянно не приходилось кликать на текстовое поле.
   */
  inputFocus() {
    // this.textInput.current.focus();
    const { current } = this.inputRef;
    if (current) {
      current.focus();
    }
  }

  /**
   * Передаёт автора и текст сообщения в родительский компонент и очищает текстовое поле
   * @param event событие отправки данных формы
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { messageText } = this.state;
    const { asyncAddMessage, currentChatId, userName } = this.props;
    const newId = v4();
    messageText &&
      asyncAddMessage({ currentChatId: currentChatId, messageText: messageText, author: userName, id: newId });

    this.setState({
      messageText: '',
    });
  };

  componentDidUpdate() {
    this.inputFocus();
  }

  render() {
    const { classes } = this.props;
    const { messageText } = this.state;

    return (
      <form onSubmit={this.onSubmit} className={classes.root}>
        <OutlinedInput
          name="messageText"
          onChange={this.onInputChange}
          placeholder="Введите текст сообщения"
          value={messageText}
          fullWidth
          autoFocus
          autoComplete="off"
          type="text"
          inputProps={{
            ref: this.inputRef,
          }}
          // ref={this.textInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={this.onSubmit}>
                <Send />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
    );
  }
}

FormMessage.propTypes = {
  asyncAddMessage: PropTypes.func.isRequired,
  currentChatId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  asyncAddMessage,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FormMessage));
