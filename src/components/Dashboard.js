require('styles/Dashboard.scss');

import React from 'react';
import socket from 'socket.io-client';

import MessageForm from './MessageForm';
import MessagesBoard from './MessagesBoard';

const sessionStorage = window.sessionStorage;
const io = socket('http://localhost:3000');

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { boardActivities: [] };

    io.on('message:receive', this._handleMessage.bind(this));
    io.on('user:joined', this._handleJoinedUsers.bind(this));

    io.emit('user:joined', sessionStorage.getItem('userName'));
  }

  _handleMessage(message) {
    let {boardActivities} = this.state;
    boardActivities.push({
      type: 'message',
      content: message
    });

    this.setState({boardActivities});
  }

  _handleJoinedUsers(userName) {
    let {boardActivities} = this.state;

    boardActivities.push({
      type: 'joined',
      content: {userName}
    });

    this.setState({boardActivities});
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
        <MessagesBoard activities={this.state.boardActivities} />
        <MessageForm onMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </section>
    );
  }
}

export default DashboardComponent;
