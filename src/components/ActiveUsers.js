require('styles/ActiveUsers.scss');

import React from 'react';
import classNames from 'classnames';

const sessionStorage = window.sessionStorage;

class ActiveUsersComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let usersList = this.props.users.map((userName, i) => {

      let userItemClass = classNames({
        'list-group-item': true,
        'is-current-user': (userName === sessionStorage.getItem('userName'))
      });

      return (
        <li key={i} className={userItemClass}>{userName}</li>
      );
    });

    return (
      <section className="active-users">
        <h5>Users online:</h5>
        <ul className="list-group">
          {usersList}
        </ul>
      </section>
    );
  }
}

export default ActiveUsersComponent;
