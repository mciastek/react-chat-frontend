import 'bootstrap/scss/bootstrap-flex.scss';
import 'styles/App.scss';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;
