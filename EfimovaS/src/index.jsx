import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4} from 'uuid';
import Message from './components/Message';
import FormMessage from './components/FormMessage';
import './index.css';

console.log("Hello React!");

class HelloMessage extends React.Component {
  state = {
    messages: [
      {
        id: uuidv4(),
        author: "Bot",
        message: "Hello from Bot",
      },
    ],
  }

  
  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (messages.length % 2 === 0) {
      setTimeout(() => {
        this.addMessage({ author: "Bot", message: "Hello, I'm Bot" });
      }, 500);
    }
  }

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, { ...message, id: uuidv4() }] });
  };

    render() {

     const { messages } = this.state;

      return (
        <div>
          <h2>Hello {this.props.name}</h2>
          <ul className='list'> 
            {messages.map(({ id, author, message }) => (
              <Message key={id} author={author} message={message} />
            ))}
          </ul>
        <FormMessage addMessage={this.addMessage} />
        </div>
      );
    };

}
  
ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);