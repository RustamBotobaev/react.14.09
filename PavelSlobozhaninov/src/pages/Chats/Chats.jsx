import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout/Layout';

class Chats extends Component {
  state = {
    chats: {
      1: { id: 1, title: 'Чат 1', messageList: [1, 2] },
      2: { id: 2, title: 'Чат 2', messageList: [3, 2] },
      3: { id: 3, title: 'Чат 3', messageList: [2, 3] },
    },
    messages: {
      1: {
        id: 1,
        author: 'Bot',
        message: 'Привет от бота',
      },
      2: {
        id: 2,
        author: 'Bot',
        message: 'Давай поболтаем',
      },
      3: {
        id: 3,
        author: 'Bot',
        message: 'Давай поболтаем, я в третьем чате',
      },
    },
  };

  componentDidUpdate(prevProps, prevState) {
    const lastMessages = this.messages;

    if (lastMessages[lastMessages.length - 1]?.author !== 'Bot') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', message: 'привет, я бот' });
      }, 500);
    }
  }

  get messages() {
    const { id } = this.props.match.params;
    const { chats, messages } = this.state;
    if (id in chats) {
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  }

  addMessage = ({ author, message }) => {
    const { id } = this.props.match.params;
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, message } },
    }));

    // with Immer.js
    // this.setState(prevState =>
    //   produce(prevState, draft => {
    //     draft.chats[id].messageList.push(newId);
    //     draft.messages[newId] = { id: newId, author, message };
    //   }),
    // );
  };

  render() {
    return (
      <Layout>
        <MessageList messages={this.messages} />
        <FormMessage addMessage={this.addMessage} />
      </Layout>
    );
  }
}

export default Chats;
