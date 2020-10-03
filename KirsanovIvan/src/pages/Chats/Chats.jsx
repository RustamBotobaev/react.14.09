import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
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

  get messages() {
    const {
      match: {
        params: { id },
      },
      chats,
      messages
    } = this.props;

    if (id in chats) {
      return chats[id].messageList.map(messId => messages[messId]);
    }
    return [];
  }

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
    // this.setState(prevState =>
    //   produce(prevState, draft => {
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

  render() {
    return (
      <Layout>
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '80vh', padding: '20px 40px' }}
        >
          <MessageList messages={this.messages}/>
        </Typography>
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
  addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
