/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import produce from 'immer';
import { connect } from 'react-redux';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout/Layout';
import { getActiveMessages, getIsFetching } from '../../selectors/chatsSelectors';
import Preloader from '../../components/Preloader/Preloader';
import { fetchChats, addMessage } from '../../reducers/chatReducer';
import { getCurrentMessages } from '../../selectors/messageSelectors';

class Chats extends Component {
  componentDidMount() {
    const { fetchChats: asyncFetchChats } = this.props;
    asyncFetchChats();
  }

  submitMessage = ({ author, message }) => {
    const {
      addMessage,
      match: {
        params: { id },
      },
    } = this.props;
    addMessage({ author, message, chatId: id, id: uuidv4() });
  };

  render() {
    const { messages, activeMessages, isFetching } = this.props;

    return (
      <Layout>
        <Preloader open={isFetching} />
        <MessageList messages={messages} activeMessages={activeMessages} />
        <FormMessage addMessage={this.submitMessage} />
      </Layout>
    );
  }
}

Chats.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  messages: PropTypes.arrayOf(PropTypes.any).isRequired,
  activeMessages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
  addMessage: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchChats: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    messages: getCurrentMessages(state, id),
    activeMessages: getActiveMessages(state),
    isFetching: getIsFetching(state),
  };
};

const mapDispatchToProps = {
  addMessage,
  fetchChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
