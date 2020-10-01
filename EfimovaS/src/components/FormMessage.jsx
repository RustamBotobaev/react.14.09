import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './FormMessage.module.css';

class FormMessage extends Component {
  state = {
    author: "",
    message: "",
  };

  onSubmit = (e) => {
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
    const { author, message } = this.state;
    return (
      <form className={styles.list} onSubmit={this.onSubmit}>
        <div>
          <label>
            <span>Author: </span>
            <input type="text" name="author" onChange={this.onChange} value={author}/>
          </label>
        </div>
        <div>
          <label>
            <span>Text: </span>
            <input type="text" name="message" onChange={this.onChange} value={message}/>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default FormMessage;