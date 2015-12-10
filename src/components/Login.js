require('styles/Login.scss');

import React from 'react';

class LoginComponent extends React.Component {
  render() {
    return (
      <section className="login-form jumbotron">
        <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">@</span>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary-outline">Login</button>
          </div>
      </section>
    );
  }
}

export default LoginComponent;
