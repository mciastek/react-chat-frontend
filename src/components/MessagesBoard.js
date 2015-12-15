require('styles/MessagesBoard.scss');

import React from 'react';

import Message from './Message';

const sessionStorage = window.sessionStorage;

class MessagesBoardComponent extends React.Component {
  render() {
    let activitiesList = this.props.activities.map(({type, content}, i) => {
      let isCurrentUser = false;

      if (type === 'message') {
        isCurrentUser = (content.author === sessionStorage.getItem('userName'));

        return (
          <Message key={i} text={content.text} author={content.author} isCurrentUser={isCurrentUser} />
        );

      } else if (type === 'joined') {
        return (
          <div className="messages-board__joined" key={i}>
            <small>{content.userName} joined room</small>
          </div>
        );
      }

    });

    return(
      <section className="messages-board">
        {activitiesList}
      </section>
    );
  }
}

export default MessagesBoardComponent;
