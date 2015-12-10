import React from 'react';

class MessageFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: props.message }
  }

  setMessageProp(event) {
    this.setState({ message: event.target.value });
  }

  sendMessage() {
    this.props.socket.emit('message', this.state.message);
  }

  render() {
    return (
      <section className="message-form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your message..." onChange={this.setMessageProp.bind(this)} />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary-outline" onClick={this.sendMessage.bind(this)}>Send</button>
        </div>
      </section>
    );
  }
}

MessageFormComponent.propTypes = {
  message: React.PropTypes.string
}

export default MessageFormComponent;
