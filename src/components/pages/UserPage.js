import React, { Component } from 'react';
import ProfileCard from '../Molecules/ProfileCard/ProfileCard';

class UserPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="user-grid">
          <div className="user-col">
            <ProfileCard></ProfileCard>
          </div>
          <div className="user-col">Hello</div>
        </div>
      </div>
    );
  }
}

export default UserPage;
