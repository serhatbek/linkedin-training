import React, { Component } from 'react';
import Links from '../Molecules/Links/Links';
import UserCard from '../Molecules/UserCard/UserCard';
import Heading3 from '../Atoms/Text/Heading3';

class UsersPage extends Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();

    this.setState({ usersList: data });
  };

  btnDetails = (user) => {
    const id = user;
    this.props.history.push(`/user/${id}`);
  };

  render() {
    return (
      <div className="users">
        <div className="container">
          <div className="users-grid">
            <Links />
            <div className="users-list">
              <Heading3 text="Users List" />
              {this.state.usersList.map((user, key) => (
                <UserCard
                  key={key}
                  id={user.id}
                  name={user.name}
                  company={user.company.name}
                  src="https://picsum.photos/55/55"
                  onButtonClick={() => this.btnDetails(user.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersPage;
