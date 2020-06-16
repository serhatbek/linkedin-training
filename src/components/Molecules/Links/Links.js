import React from 'react';
import { Link } from 'react-router-dom';
import Connections from '../../../assets/img/connections.png';
import Invitations from '../../../assets/img/invitation.png';
import Teammates from '../../../assets/img/teammates.png';
import Groups from '../../../assets/img/groups.png';
import Pages from '../../../assets/img/pages.png';
import Hash from '../../../assets/img/hash.png';

function Links() {
  return (
    <div className="links-box">
      <ul className="links-box__items">
        <li className="links-box__item">
          <img
            className="links-box__item-icon"
            src={Connections}
            alt="Connections"
          />
          <Link to="/connections">Connections</Link>
          <span>1,038</span>
        </li>
        <li className="links-box__item">
          <img
            className="links-box__item-icon"
            src={Invitations}
            alt="Invitations"
          />
          <Link to="/invitations">Invitations</Link>
          <span>2</span>
        </li>
        <li className="links-box__item">
          <img
            className="links-box__item-icon"
            src={Teammates}
            alt="Teammates"
          />
          <Link to="/teammates">Teammates</Link>
          <span>9</span>
        </li>
        <li className="links-box__item">
          <img className="links-box__item-icon" src={Groups} alt="Groups" />
          <Link to="/groups">Groups</Link>
          <span>6</span>
        </li>
        <li className="links-box__item">
          <img className="links-box__item-icon" src={Pages} alt="Pages" />
          <Link to="/pages">Pages</Link>
          <span>28</span>
        </li>
        <li className="links-box__item">
          <img className="links-box__item-icon" src={Hash} alt="Hash" />
          <Link to="/hash">Hashtags</Link>
          <span>8</span>
        </li>
      </ul>
    </div>
  );
}

export default Links;
