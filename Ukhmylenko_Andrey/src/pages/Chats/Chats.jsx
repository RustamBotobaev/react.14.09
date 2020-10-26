/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
// import produce from 'immer';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import { asyncAddMessage } from '../../reducers/messagesReducer';
import { getActiveMessages, getCurrentMessages } from '../../selectors/chatsSelectors';
import Header from '../../components/Header';
import MainWindow from '../../components/MainWindow';

class Chats extends Component {
  submitMessage = ({ author, message }) => {
    const {
      asyncAddMessage,
      match: {
        params: { id },
      },
    } = this.props;
    asyncAddMessage({ author, message, chatId: id, id: uuidv4() });
  };

  render() {
    const { messages, activeMessages } = this.props;

    return (
      <div>
        <Layout>
          <Header />
          <MainWindow
            messages={messages}
            addMessage={this.submitMessage}
            activeMessages={activeMessages}
          />
        </Layout>
      </div>
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
  asyncAddMessage: PropTypes.func.isRequired,
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
  };
};

const mapDispatchToProps = {
  asyncAddMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
