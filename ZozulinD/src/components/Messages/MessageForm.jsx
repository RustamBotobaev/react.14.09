import React, { useState } from 'react';

import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  input: {
    marginBottom: theme.spacing(1),
  },
}));

const MessageForm = ({ addMessage }) => {
  const classes = useStyles();

  const [input, setInput] = useState({
    author: '',
    message: '',
  });

  const [inputErrors, setInputErrors] = useState({
    author: false,
    message: false,
  });

  const clearInputs = () => {
    setInput({
      author: '',
      message: '',
    });
  };

  const testInputs = () => {
    setInputErrors({
      author: input.author.length === 0,
      message: input.message.length === 0,
    });

    return input.author.length > 0 && input.message.length > 0;
  };

  const onChange = ({ target: { name, value } }) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (testInputs()) {
      addMessage(input);

      clearInputs();
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.form} noValidate autoComplete="off">
      <TextField
        onChange={onChange}
        className={classes.input}
        type="text"
        value={input.author}
        error={inputErrors.author}
        name="author"
        placeholder="Author"
      />
      <TextField
        onChange={onChange}
        className={classes.input}
        type="text"
        value={input.message}
        error={inputErrors.message}
        name="message"
        placeholder="Message"
      />
      <Button type="submit" color="primary">
        Add message
      </Button>
    </form>
  );
};

export default MessageForm;
