/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, withStyles } from '@material-ui/core';
import FormMessage from '../FormMessage';
import Header from '../Header';
import Message from '../Message';
import ChatList from '../ChatList';

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
};

class HelloMessage extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: 'Bot',
        message: 'What do you want?',
      },
    ],
    user: '',
    count: 0,
    authorMessages: [],
    botMessages: ['What?', 'Please, say me what you want?', 'May be later?'],
  };

  addMessage = message => {
    const { messages, authorMessages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
    if (messages.length % 2 !== 0) {
      this.setState({ authorMessages: [...authorMessages, message] });
    }
    console.log(authorMessages);
  };

  componentDidUpdate(prevPrors, prepState) {
    const { messages, user, botMessages, count } = this.state;
    if (messages.length % 2 === 0) {
      this.addMessage({ author: 'Bot', message: `${user} ${botMessages[count]}` });
      this.setState({ count: count + 1 });
    }
  }

  render() {
    const { classes } = this.props;
    const { messages } = this.state;

    return (
      <div className={classes.root}>
        <Header />
        <ChatList />
        <Box marginTop={8}>
          <ul className="list">
            {messages.map(({ id, author, message }) => (
              <Message key={id} author={author} message={message} />
            ))}
          </ul>
        </Box>
        <FormMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

export default withStyles(styles)(HelloMessage);
