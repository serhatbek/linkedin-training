import React from 'react';
import Navigation from '../../Molecules/Navigation/Navigation';
import UserLoggedin from '../../Molecules/UserLoggedin/UserLoggedin';
import Input from '../../Atoms/Input/Input';
import Other from '../../Molecules/Other/Other';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="site-logo">
          <h1 className="logo">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5262 2.5262C0 5.05241 0 9.11827 0 17.25V28.75C0 36.8817 0 40.9476 2.5262 43.4738C5.05241 46 9.11827 46 17.25 46H28.75C36.8817 46 40.9476 46 43.4738 43.4738C46 40.9476 46 36.8817 46 28.75V17.25C46 9.11827 46 5.05241 43.4738 2.5262C40.9476 0 36.8817 0 28.75 0H17.25C9.11827 0 5.05241 0 2.5262 2.5262ZM11.4811 14.4099C9.58715 14.4099 8.05 12.8571 8.05 10.9425C8.05 9.02789 9.58715 7.475 11.4811 7.475C13.3751 7.475 14.9123 9.02789 14.9123 10.9425C14.9123 12.8571 13.3771 14.4099 11.4811 14.4099ZM8.54016 38.525V16.9024H14.4221V38.525H8.54016ZM32.068 38.525H37.95V25.2389C37.95 14.9132 26.9644 15.2886 24.2254 20.3719V16.9024H18.3434V38.525H24.2254V27.5093C24.2254 21.3901 32.068 20.8889 32.068 27.5093V38.525Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="23"
                  y1="0"
                  x2="23"
                  y2="46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0077B5" />
                  <stop offset="1" stop-color="#0E6795" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
        </div>
      </Link>

      <div className="container">
        <div className="nav__wrapper">
          <Navigation />
          <Input />
          <UserLoggedin />
          <Other />
        </div>
      </div>
    </header>
  );
}

export default Header;
