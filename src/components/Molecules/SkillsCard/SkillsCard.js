import React from 'react';
import Heading1 from '../../Atoms/Text/Heading1';
import Heading2 from '../../Atoms/Text/Heading2';
import { Link } from 'react-router-dom';
import AllUsers from '../../../assets/img/users-all.png';

function SkillsCard() {
  return (
    <div className="skills-card">
      <Heading1 text="Skills and Endoresments" />
      <div className="skills-card__content">
        <div className="skills-card__content-box">
          <div className="skills-card__content-box-title">
            <Heading2 text="User experience (UX)" />
            <span className="skills-card__content-box-number">6</span>
          </div>
          <div className="skills-card__content-box-img">
            <img src={AllUsers} alt="users" />
          </div>
        </div>

        <div className="skills-card__content-box">
          <div className="skills-card__content-box-title">
            <Heading2 text="User experience (UX)" />
            <span className="skills-card__content-box-number">6</span>
          </div>
          <div className="skills-card__content-box-img">
            <img src={AllUsers} alt="users" />
          </div>
        </div>

        <div className="skills-card__content-box">
          <div className="skills-card__content-box-title">
            <Heading2 text="User experience (UX)" />
            <span className="skills-card__content-box-number">6</span>
          </div>
          <div className="skills-card__content-box-img">
            <img src={AllUsers} alt="users" />
          </div>
        </div>
      </div>
      <Link className="skills-card__link" to="showAll">
        Show all (17)
      </Link>
    </div>
  );
}

export default SkillsCard;
