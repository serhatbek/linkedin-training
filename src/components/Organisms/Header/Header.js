import React from 'react';
import Navigation from '../../Molecules/Navigation/Navigation';
import UserLoggedin from '../../Molecules/UserLoggedin/UserLoggedin';
import Input from '../../Atoms/Input/Input';
import Other from '../../Molecules/Other/Other';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/Logo.png';

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/users">
          <div className="site-logo">
            <h1 className="logo">
              <img src={Logo} alt="Logo" />
            </h1>
          </div>
        </Link>

        <div className="container">
          <div className="nav__wrapper">
            <Navigation />
            <Input />
            <UserLoggedin />
          </div>
        </div>
        <Other />
      </div>
    </div>
  );
}

export default Header;
