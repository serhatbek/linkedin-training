import React, { Component } from 'react';
import Links from '../Molecules/Links/Links';

class UsersPage extends Component {
  render() {
    return (
      <div className="users">
        <div className="container">
          <div className="users-grid">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export default UsersPage;
