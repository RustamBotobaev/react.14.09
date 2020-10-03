import React, { Component } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList/MessageList';
import FormMessage from '../../components/FormMessage';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ChatList from '../../components/ChatList/ChatList';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';

class Chats extends Component {
  state = {
    userName: 'Bob',
  };

  /**
   * Получение списка сообщений текущего чата
   */
  get messageList() {
    const { id } = this.props.match.params;
    const { chatList, messageList } = this.state;
    if (id in chatList) {
      return chatList[id].messageIdList.map((messageId) => messageList[messageId]);
    }
    return [];
  }

  /**
   * Автоответ бота
   */
  answerToMessage = () => {
    const { id } = this.props.match.params;
    const newId = v4();

    this.setState(({ chatList, messageList, userName }) => ({
      chatList: {
        ...chatList,
        [id]: { ...chatList[id], messageIdList: [...chatList[id].messageIdList, newId] },
      },
      messageList: {
        ...messageList,
        [newId]: { id: v4(), author: 'BOT', messageText: `${userName}, в чате больше никого нет. Кому ты пишешь?` },
      },
    }));
  };

  /**
   * Проверяет, чьё сообщение было последним и если это не бот, то запускает родительский метод автоответа
   */
  componentDidUpdate() {
    const { messageList } = this;
    if (messageList.length > 0 && messageList[messageList.length - 1].author != 'BOT') {
      this.answerToMessage(messageList[messageList.length - 1].author);
    }
  }

  render() {
    const { chatList } = this.props;
    const { id } = this.props.match.params;

    return (
      <Layout>
        <ChatList />
        {id in chatList ? (
          <>
            <Header currentChatId={id} />
            <MessageList currentChatId={id} />
            <FormMessage />
          </>
        ) : (
          <Container>
            <h1>Выберите чат</h1>
          </Container>
        )}
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  chatList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  chatList: state.chats.chatList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
