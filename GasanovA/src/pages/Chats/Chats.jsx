import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import MessaheList from '../../components/MessageList';
import FormMessage from '../../components/FormMessage';
import Layout from '../../components/Layout';
import { addMessageToState } from '../../actions/chatActions';

const styles = theme => ({
  ChatBox: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
});

class Chats extends Component {

  // componentDidUpdate() {
  //   const lastMessag = this.messages;

  //   if (lastMessag[lastMessag.length - 1]?.author !== 'Bot') {
  //     setTimeout(() => {
  //       this.addMessage({ author: 'Bot', message: 'привет, я бот' });
  //     }, 500);
  //   }
  // }

  // get messages() {
  //   const { id } = this.props.match.params;
  //   const { chats, messages } = this.state;
  //   if (id in chats){
  //     return chats[id].messageList.map(messId => messages[messId]);
  //   }
  //   return [];
  // }
    
  addMessage = ({ author, message }) => {
    const { id } = this.props.match.params;
    const newId = uuidv4();

    this.setState(({ chats, messages }) => ({
      chats: {
        ...chats,
        [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
      },
      messages: { ...messages, [newId]: { id: newId, author, message } },
    }));
  };

  addChat = () => {
    const newID = uuidv4();
    this.setState(({ chats }) => ({
      chats: { ...chats, [newID]: { id: newID, tittle: `Чат ${newID}`, messageList: []}}
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Box className={classes.ChatBox}>
          <MessaheList />
          <FormMessage addMessage={this.addMessage} />
        </Box>
      </Layout>
    );
  }
};

const mapStateToProps = store =>({
  chatsFromRedux: store.chats,
});

const mapDispatchToProps = {
  addMessage: addMessageToState,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Chats));

