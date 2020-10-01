import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout';

class Chats extends Component {
  state = {
    chats: {
      1: { id: 1, title: 'Чат 1', messageList: [1] },
      2: { id: 2, title: 'Чат 2', messageList: [2] },
      3: { id: 3, title: 'Чат 3', messageList: [3] },
    },
    messages: {
      1: {
        id: 1,
        author: 'Bot',
        text: 'Привет от бота',
      },
      2: {
        id: 2,
        author: 'Bot',
        text: 'Давай поболтаем',
      },
      3: {
        id: 3,
        author: 'Bot',
        text: 'Давай поболтаем, я в третьем чате',
      },
    },
  };

  /**
   * После того как я обратился к боту, выполнился render и мое сообщение отобразилось. Дальше идет выполнение CDU
    и в качестве параметра в addMessage мы уже передаем объект { author: 'Bot', message: 'I am Bot' } и он
    также закидываетя в массив messages

    Дальше, после добавления, берем новый объект из state (это наше новое сообщение)
    и когда проверка проходит и последнее сообщение от меня, то бот нам отвечает
   */
  componentDidUpdate() {
    const lastMessage = this.messages;
    if (lastMessage[lastMessage.length - 1]?.author === 'Me') {
      setTimeout(() => {
        this.addMessage({ author: 'Bot', text: 'I am Bot' });
      }, 1000);
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

  /**
   * в методе addMessage мы добавляем в массив messages (нвше сообщение боту) еще один объект с новыми данными,
   * который идет в state
   * @param {*} text объект из метода onSubmit, => state {text} (это то что я прописал в input)
   */
  addMessage = ({ author, text }) => {
    const { id } = this.props.match.params; // в match хранятся id наших чатов
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, text } },
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
