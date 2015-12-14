require('styles/Dashboard.scss');

import React from 'react';
import socket from 'socket.io-client';


import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

let io = socket('http://localhost:3000');

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages: [] };

    io.on('message:receive', this._handleMessage.bind(this));
  }

  _handleMessage(message) {
    var {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  handleMessageSubmit(text) {
    let message = {
      author: 'Me',
      text: text
    };

    this._handleMessage(message);
    io.emit('message:send', message);
  }

  render() {
    return (
      <section className="chat-dashboard">
        <MessagesList messages={this.state.messages} />
        <MessageForm onMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </section>
    );
  }
}

export default DashboardComponent;
