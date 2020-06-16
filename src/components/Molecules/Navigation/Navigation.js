import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../../assets/img/posts.png';
import users from '../../../assets/img/users.png';
import todos from '../../../assets/img/todos.png';

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__link">
        <img src={users} alt="Users" />

        <Link className="nav__link-item" to="/users">
          Users
        </Link>
      </div>

      <div className="nav__link">
        <img src={todos} alt="Todos" />

        <Link className="nav__link-item" to="/todos">
          Todos
        </Link>
      </div>

      <div className="nav__link">
        <img src={posts} alt="Posts" />

        <Link className="nav__link-item" to="/posts">
          Posts
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
