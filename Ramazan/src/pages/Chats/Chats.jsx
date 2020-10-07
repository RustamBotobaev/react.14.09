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
  // componentDidMount() {
  //   const { fetchChats: asyncFetchChats } = this.props;
  //   asyncFetchChats();
  // }
  /**
   * После того как я обратился к боту, выполнился render и мое сообщение отобразилось. Дальше идет выполнение CDU
    и в качестве параметра в addMessage мы уже передаем объект { author: 'Bot', message: 'I am Bot' } и он
    также закидываетя в массив messages

    Дальше, после добавления, берем новый объект из state (это наше новое сообщение)
    и когда проверка проходит и последнее сообщение от меня, то бот нам отвечает
   */
  // componentDidUpdate() {
  //   const lastMessage = this.messages;
  //   if (lastMessage[lastMessage.length - 1]?.author === 'Me') {
  //     setTimeout(() => {
  //       this.addMessage({ author: 'Bot', text: 'I am Bot' });
  //     }, 1000);
  //   }
  // }

  /**
   * Так как мы в RootRouter передали Chats через component (<Route component={Chats}/>)
   * то у нас автоматически передались и его params (в часности и match, в котором лежит id),
   * далее, с помощь if (id in chats) ищем id чата в state ....
   */
  // get messages() {
  //   const {
  //     match: {
  //       params: { id },
  //     },
  //     chats,
  //     messages,
  //   } = this.props;
  //   if (id in chats) {
  //     return chats[id].messageList.map(messId => messages[messId]);
  //   }
  //   return [];
  // }

  /**
   * в методе addMessage мы добавляем в массив messages (нвше сообщение боту) еще один объект с новыми данными,
   * который идет в state
   * @param {*} text объект из метода onSubmit, => state {text} (это то что я прописал в input)
   */
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

const mapDispatchToProps = {
  addMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
