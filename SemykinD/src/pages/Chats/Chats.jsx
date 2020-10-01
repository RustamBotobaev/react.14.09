import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import withStyles from '@material-ui/core/styles/withStyles';
import MessageField from '../../components/MessageField/MessageField';
import MessageList from '../../components/MessageList/MessageList';
import Layout from '../../components/Layout';

const styles = theme => ({
  messageField: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    margin: theme.spacing(8),
    padding: theme.spacing(2),
    position: 'relative',
  },
});

class Chats extends Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: 'Bot',
        message: 'Я бот, чего ты от меня хочешь, кожаный мешок?',
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages[messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', message: 'Отстань от меня!' });
      }, 1000);
    }
  }

  addMessage = message => {
    const { messages } = this.state;

    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

  render() {
    const { messages } = this.state;
    return (
      <Layout>
        <MessageList messages={messages} />
        <MessageField addMessage={this.addMessage} />
      </Layout>
    );
  }
}

export default withStyles(styles)(Chats);
