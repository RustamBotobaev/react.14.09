import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import produce from 'immer';
import { connect } from 'react-redux';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout/Layout';
import { addMessage } from '../../reducers/messagesReducer';

class Chats extends Component {
  // componentDidUpdate() {
  //   const lastMessages = this.messages;

  //   if (lastMessages[lastMessages.length - 1]?.author !== 'Bot') {
  //     setTimeout(() => {
  //       this.addMessage({ author: 'Bot', message: 'привет, я бот' });
  //     }, 500);
  //   }
  // }

  addMessage = ({ author, message }) => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, message } },
    }));

    // with Immer.js
    // this.setState(
    //   produce(draft => {
    //     draft.chats[id].messageList.push(newId);
    //     draft.messages[newId] = { id: newId, author, message };
    //   }),
    // );
  };

  addChat = () => {
    const newId = uuidv4();
    this.setState(({ chats }) => ({
      chats: { ...chats, [newId]: { id: newId, title: `Чат ${newId}`, messageList: [] } },
    }));
  };

  get messages() {
    const {
      match: {
        params: { id },
      },
      chats,
      messages,
    } = this.props;

    if (id in chats) {
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  }

  render() {
    return (
      <Layout>
        <MessageList messages={this.messages} />
        <FormMessage addMessage={this.addMessage} />
        <button onClick={() => this.props.addMessage()}>add message</button>
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

const mapStateToProps = state => ({
  chats: state.chats.byIds,
  messages: state.messages.byIds,
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
