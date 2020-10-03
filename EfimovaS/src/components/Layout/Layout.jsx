import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4} from 'uuid';
import { withStyles } from '@material-ui/core';
import Header from '../Header';
import Message from '../Message';
import FormMessage from '../FormMessage';
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
        author: "Bot",
        message: "Hello from Bot",
      },
    ],
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages.length % 2 === 0) {
      setTimeout(() => {
        this.addMessage({ author: "Bot", message: "Hello, I'm Bot" });
      }, 500);
    }
  }

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

    render() {
        const { classes } = this.props;
        const { messages } = this.state;
        return (
            <div className={classes.root}>
            <Header />
            <ChatList />
            <ul className='list'> 
                {messages.map(({ id, author, message }) => (
                <Message key={id} author={author} message={message} />
                ))}
            </ul>
            <FormMessage addMessage={this.addMessage} />
            </div>
        );
    };
}

HelloMessage.PropTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }).isRequired,
};

export default withStyles(styles)(HelloMessage);