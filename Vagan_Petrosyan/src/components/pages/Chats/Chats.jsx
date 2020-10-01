import React from 'react';
import MessageList from "../../MessageList";
import FormMessage from "../../FormMessage";
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";
import Layout from "../../Layout";

class Chats extends Comment {
    state = {
        messages: [
            {
                id: uuidv4(),
                author: "Bot",
                message: "Привет! я Bot",
            },
        ],
    };
    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;
        if (messages.length % 2 === 0 ) {
            setTimeout(() => {
                this.addMessage({author: "Bot", message: "Привет я Бот"})
            }, 500);
        }
    }

    addMessage = message => {
        const { messages } = this.state;
        this.setState({ messages: [...messages, { ...message, id: uuidv4() }]});
    };

    render() {
        const { messages } = this.state;

        return (
            <Layout>
                <MessageList messages={messages} />
                <FormMessage addMessage={this.addMessage} />
            </Layout>
        );
    }
}

Chats.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        container: PropTypes.string,
    }).isRequired,
};

export default Chats;