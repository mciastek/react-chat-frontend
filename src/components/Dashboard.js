require('styles/Dashboard.scss');

import React from 'react';
import socket from 'socket.io-client';

import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

const sessionStorage = window.sessionStorage;
const io = socket('http://localhost:3000');

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages: [], recentlyJoined: [] };

    io.on('message:receive', this._handleMessage.bind(this));
    io.on('user:joined', this._handleJoinedUsers.bind(this));

    io.emit('user:joined', sessionStorage.getItem('userName'));
  }

  _handleMessage(message) {
    var {messages} = this.state;
    messages.push(message);

    this.setState({messages});
  }

  _handleJoinedUsers(userName) {
    var {recentlyJoined} = this.state;
    recentlyJoined.push(userName);

    this.setState({recentlyJoined});
  }

  handleMessageSubmit(text) {
    let message = {
      author: sessionStorage.getItem('userName'),
      text: text
    };

    this._handleMessage(message);
    io.emit('message:send', message);
  }

  render() {
    return (
      <section className="chat-dashboard">
        <MessagesList messages={this.state.messages} joined={this.state.recentlyJoined} />
        <MessageForm onMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </section>
    );
  }
}

export default DashboardComponent;
