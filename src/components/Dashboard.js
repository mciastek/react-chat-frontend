require('styles/Dashboard.scss');

import React from 'react';
import io from 'socket.io-client';

import ActiveUsers from './ActiveUsers';
import MessageForm from './MessageForm';
import MessagesBoard from './MessagesBoard';

const sessionStorage = window.sessionStorage;

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    const socket = io.connect('http://localhost:3000');

    this.state = { boardActivities: [], onlineUsers: [] };

    socket.on('init', this._getOnlineUsers.bind(this));
    socket.on('message:receive', this._handleMessage.bind(this));
    socket.on('user:joined', this._handleUserAction.bind(this));
    socket.on('user:left', (data) => { this._handleUserAction(data, 'left'); });

    socket.emit('user:joined', sessionStorage.getItem('userName'));
  }

  _getOnlineUsers(data) {
    let {onlineUsers} = data;
    this.setState({onlineUsers});
  }

  _handleMessage(message) {
    let {boardActivities} = this.state;
    boardActivities.push({
      type: 'message',
      content: message
    });

    this.setState({boardActivities});
  }

  _handleUserAction(data, action = 'joined') {
    let {boardActivities} = this.state;
    let {userName, onlineUsers} = data;

    boardActivities.push({
      type: 'action',
      content: { action, userName }
    });

    this.setState({boardActivities, onlineUsers});
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
        <div className="row">
          <div className="col-xs-3">
            <ActiveUsers users={this.state.onlineUsers} />
          </div>
          <div className="col-xs-9">
            <MessagesBoard activities={this.state.boardActivities} />
            <MessageForm onMessageSubmit={this.handleMessageSubmit.bind(this)} />
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardComponent;
