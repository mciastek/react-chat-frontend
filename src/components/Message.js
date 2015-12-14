require('styles/Message.scss');

import React from 'react';

const { string } = React.PropTypes;

class MessageComponent extends React.Component {
  render() {
    return(
      <section className="message">
        <p className="message__text">{this.props.text}</p>
        <small className="message__author">{this.props.author}</small>
      </section>
    );
  }
}

MessageComponent.propTypes = {
  author: string,
  text: string
};

export default MessageComponent;
