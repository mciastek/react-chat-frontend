require('styles/Dashboard.scss');

import React from 'react';
import socket from 'socket.io-client';


import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

let io = socket('http://localhost:3000');

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    io.on('connect', () => {

    });
  }

  render() {
    return (
      <section className="chat-dashboard">
        <MessagesList socket={io} />
        <MessageForm socket={io} />
      </section>
    );
  }
}

export default DashboardComponent;
