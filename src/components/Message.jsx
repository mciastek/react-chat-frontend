require('styles/Message.scss');

import React from 'react';
import classNames from 'classnames';

const { string } = React.PropTypes;

class MessageComponent extends React.Component {
  render() {
    let authorClass = classNames({
      'message__author': true,
      'is-current-user': this.props.isCurrentUser
    });

    return(
      <section className="message">
        <small className={authorClass}>{this.props.author}</small>
        <p className="message__text">{this.props.text}</p>
      </section>
    );
  }
}

MessageComponent.propTypes = {
  author: string,
  text: string
};

export default MessageComponent;
