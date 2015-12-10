require('bootstrap/scss/bootstrap-flex.scss');
require('styles/App.scss');

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

AppComponent.propTypes = {
  foo: React.PropTypes.string
};

AppComponent.defaultProps = {
  foo: 'foo'
};

export default AppComponent;
