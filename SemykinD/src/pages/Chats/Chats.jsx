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
    chats: {
      1: { id: 1, title: 'Chat 1', messageList: [1, 3] },
      2: { id: 2, title: 'Chat 2', messageList: [2] },
      3: { id: 3, title: 'Chat 3', messageList: [3] },
    },
    messages: {
      1: {
        id: 1,
        author: 'Bot',
        message: 'Я бот, чего ты от меня хочешь, кожаный мешок?',
      },
      2: {
        id: 2,
        author: 'Bot',
        message: 'Вали отсюда!',
      },
      3: {
        id: 3,
        author: 'Bot',
        message: 'ПиуПиу',
      },
    },
  };

  componentDidUpdate() {
    const  lastMessages = this.messages;
    if (lastMessages[lastMessages.length - 1]?.author !== 'Bot') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', message: 'Отстань от меня!' });
      }, 1000);
    }
  }

  get messages() {
    const { id } = this.props.match.params;
    const { chats, messages } = this.state;
    if(id in chats) {
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  }

  addMessage = ({author, message }) => {
    const { id } = this.props.match.params;
    const newId = uuidv4();
    this.setState(({chats, messages}) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: {id: newId, author, message } },
    }));
  };

  render() {
    return (
      <Layout>
        <MessageList messages={this.messages} />
        <MessageField addMessage={this.addMessage} />
      </Layout>
    );
  }
}

export default withStyles(styles)(Chats);
