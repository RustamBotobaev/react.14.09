import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ChatsList from '../../components/ChatsList';
import { fetchChats, addChat } from '../../reducers/chatsReducer';
import { fetchMessages, asyncAddMessage } from '../../reducers/messagesReducer';
import { getCurrentMessages, getNewMessagesIds } from '../../selectors/messagesSelectors';
import { getChatsList, getChatById, getChatTitleById, getUserName } from '../../selectors/chatsSelectors';

class Chats extends Component {
  componentDidMount() {
    const { fetchChats, fetchMessages } = this.props;
    fetchChats();
    fetchMessages();
  }

  addChat = () => {
    const { addChat } = this.props;
    addChat();
  };

  addMessage = ({ currentChatId, messageText, author, id }) => {
    const { asyncAddMessage: addMessage } = this.props;
    addMessage({ currentChatId: currentChatId, messageText: messageText, author: author, id: id });
  };

  render() {
    const { newMessagesIds, messages, userName, chats, currentChatTitle, idInChats } = this.props;
    const { id } = this.props.match.params;
    const { addChat, addMessage } = this;

    return (
      <Layout>
        <ChatsList chats={chats} addChat={addChat} />
        {idInChats ? (
          <>
            <Header currentChatTitle={currentChatTitle} />
            <MessageList messages={messages} userName={userName} newMessagesIds={newMessagesIds} />
            <FormMessage currentChatId={id} userName={userName} addMessage={addMessage} />
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
  addChat: PropTypes.func.isRequired,
  fetchChats: PropTypes.func.isRequired,
  asyncAddMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
  chats: PropTypes.any.isRequired,
  newMessagesIds: PropTypes.any.isRequired,
  userName: PropTypes.string.isRequired,
  currentChatTitle: PropTypes.string.isRequired,
  idInChats: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.any,
      title: PropTypes.string,
      messagesIdList: PropTypes.array,
    }),
    PropTypes.bool,
  ]).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    messages: getCurrentMessages(state, id),
    chats: getChatsList(state),
    newMessagesIds: getNewMessagesIds(state),
    userName: getUserName(state),
    currentChatTitle: getChatTitleById(state, id),
    idInChats: getChatById(state, id),
  };
};

const mapDispatchToProps = { addChat, fetchChats, fetchMessages, asyncAddMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
