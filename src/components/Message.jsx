require('styles/Message.scss');

import React from 'react';
import classNames from 'classnames';

const { string } = React.PropTypes;

class MessageComponent extends React.Component {
  render() {
    const authorClass = classNames({
      'message__author': true,
      'is-current-user': this.props.isCurrentUser
    });

    const brokenText = (() => {
      if (this.props.text.match(/\n/g)) {
        return this.props.text.split('\n').map((text, index) => {
          return (
            <span key={index}>
              {text}
              <br />
            </span>
          );
        });
      } else {
        return (
          <span>
            {this.props.text}
          </span>
        );
      }
    })();

    return(
      <section className="message">
        <small className={authorClass}>{this.props.author}</small>
        <p className="message__text">{brokenText}</p>
      </section>
    );
  }
}

MessageComponent.propTypes = {
  author: string,
  text: string
};

export default MessageComponent;
