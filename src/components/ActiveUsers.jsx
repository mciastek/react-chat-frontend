import 'styles/ActiveUsers.scss';

import React from 'react';
import classNames from 'classnames';

const sessionStorage = window.sessionStorage;

class ActiveUsersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: this.mappedUsersList(nextProps.users)
    });
  }

  render() {
    const usersList = this.state.users.map((userName, i) => {
      const userItemClass = classNames({
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

  mappedUsersList(usersList) {
    const currentUser = sessionStorage.getItem('userName');

    return [
      currentUser,
      ...usersList.filter((userName) => {
        return userName !== currentUser
      })
    ];
  }
}

export default ActiveUsersComponent;
