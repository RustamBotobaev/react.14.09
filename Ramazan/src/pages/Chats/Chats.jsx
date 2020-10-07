import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout';
// import { asyncAddMessage } from '../../reducers/messageReducer';
import { addMessage } from '../../reducers/messageReducer';
import { getCurrentMessages } from '../../selectors/chatSelectors';

class Chats extends Component {
  submitMessage = ({ author, text }) => {
    const {
      addMessage,
      match: {
        params: { id },
      },
    } = this.props;
    addMessage({ author, text, chatId: id, id: uuidv4() });
  };

  render() {
    const { messages } = this.props;

    return (
      <Layout>
        <MessageList messages={messages} />
        <FormMessage addMessage={this.submitMessage} />
      </Layout>
    );
  }
}

// Chats.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.objectOf(PropTypes.any),
//   }).isRequired,
//   messages: PropTypes.arrayOf(PropTypes.any).isRequired,
//   activeMessages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
//     .isRequired,
//   asyncAddMessage: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   fetchChats: PropTypes.func.isRequired,
// };

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    messages: getCurrentMessages(state, id),
  };
};

const mapDispatchToProps = {
  addMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
