import 'styles/Login.scss';

import React from 'react';
import { PropTypes } from 'react-router'

const sessionStorage = window.sessionStorage;

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userName: '' };
  }

  handleTextChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleSubmit() {
    sessionStorage.setItem('userName', this.state.userName);
    this.context.history.pushState(null, 'chat');
  }

  render() {
    return (
      <section className="login-form jumbotron">
        <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">@</span>
              <input type="text" className="form-control" placeholder="Username" value={this.state.userName} onChange={this.handleTextChange.bind(this)} />
            </div>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary-outline" onClick={this.handleSubmit.bind(this)}>Login</button>
          </div>
      </section>
    );
  }
}

LoginComponent.contextTypes = {
  history: PropTypes.history
};

export default LoginComponent;
