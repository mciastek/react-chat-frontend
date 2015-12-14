require('styles/MessagesList.scss');

import React from 'react';

import Message from './Message';

class MessagesListComponent extends React.Component {
  render() {
    var listOfMessages = this.props.messages.map(({text, author}, i) => {
      return (
        <Message key={i} text={text} author={author} />
      );
    });

    return(
      <section className="messages-list">
        {this.props.joined.map((userName, i) => {
          return (<small key={i}>{userName} joined room</small>)
        })}
        {listOfMessages}
      </section>
    );
  }
}

export default MessagesListComponent;
