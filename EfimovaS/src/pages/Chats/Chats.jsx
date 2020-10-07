import { Container } from '@material-ui/core';
import React, { Component } from 'react'
import { v4 as uuidv4} from 'uuid';
import FormMessage from '../../components/FormMessage';
import MessageList from '../../components/MessageList';
import Layout from '../../components/Layout/Layout';

class Chats extends Component {
    state = {
      chats: {
        1: { id: 1, title: 'Chat 1', messageList: [1, 2] },
        2: { id: 2, title: 'Chat 2', messageList: [1, 2] },
        3: { id: 3, title: 'Chat 3', messageList: [1, 3] },
      },
      messages: {
        1: {
          id: 1,
          author: "Bot",
          message: "Hello from Bot",
        },
        2: {
          id: 2,
          author: "Bot",
          message: "How are you",
        },
        3: {
          id: 3,
          author: "Bot",
          message: "Hi, How are you",
        },
      },
    }
      
      componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (messages.length % 2 === 0) {
          setTimeout(() => {
            this.addMessage({ author: "Bot", message: "Hello, I'm Bot" });
          }, 500);
        }
      }

      get messages() {
        const { id } = this.props.match.params;
        const { chats, messages } = this.state;
        if (id in chats) {
          return chats[id].messageList.map(messId => messages[messId]);
        }
        return [];
      }
    
      addMessage = ({ author, message }) => {
        const { id } = this.props.match.params;
        const newId = uuidv4();

        this.setState(({ chats, messages }) => ({
          chats: {
            ...chats,
            [id]: { ...chats[id], messageList: [...chats[id].messageList, newId] },
          },
          messages: { 
            ...messages, 
            [newId]: { id: newId, author, message } },
        }));
      };

      render() {
        const { classes } = this.props;
        const { messages } = this.state;
          return (
              <Layout>
                <MessageList messages={this.messages}/>
                <FormMessage addMessage={this.addMessage} />
            </Layout>
          );
      }
}

export default Chats
