import React, { Component } from 'react';
import inputSearch from '../../../assets/img/input-search.png';

export class Input extends Component {
  render() {
    return (
      <div className="nav__search">
        <label>
          <img src={inputSearch} alt="Search" />
        </label>
        <input placeholder="Search" className="nav__search-input"></input>
      </div>
    );
  }
}

export default Input;
