import React from 'react';

class MessageFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    this.props.onMessageSubmit(this.state.text);
    this.setState({ text: '' });
  }

  handleSubmitOnKey(event) {
    if (event.which === 13 && !event.shiftKey) {
      this.handleSubmit();
      event.preventDefault();
    }
  }

  render() {
    return (
      <section className="message-form">
        <div className="form-group">
          <textarea className="form-control" placeholder="Your message..." value={this.state.text} onChange={this.handleTextChange.bind(this)} onKeyDown={this.handleSubmitOnKey.bind(this)}></textarea>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary-outline" onClick={this.handleSubmit.bind(this)}>Send</button>
        </div>
      </section>
    );
  }
}

export default MessageFormComponent;
