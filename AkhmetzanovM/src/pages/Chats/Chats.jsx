import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ChatsList from '../../components/ChatsList';
import { getCurrentMessages, getUserName } from '../../selectors/chatsSelector';
import { addChatToState } from '../../reducers/chatReducer';

class Chats extends Component {
  componentDidUpdate() {}

  render() {
    const { chatsList, messages, userName } = this.props;
    const { id } = this.props.match.params;

    return (
      <Layout>
        <ChatsList />
        {chatsList ? (
          <>
            <Header currentChatId={id} />
            <MessageList messages={messages} userName={userName} />
            <FormMessage currentChatId={id} userName={userName} />
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
  chatsList: PropTypes.any.isRequired,
  userName: PropTypes.string.isRequired,
  addChatToState: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    messages: getCurrentMessages(state, id),
    userName: getUserName(state),
    chatsList: state.chats.chatsList,
  };
};

const mapDispatchToProps = { addChatToState };

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
