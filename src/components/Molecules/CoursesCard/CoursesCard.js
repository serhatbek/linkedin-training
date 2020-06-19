import React from 'react';
import Heading3 from '../../Atoms/Text/Heading3';
import Heading2 from '../../Atoms/Text/Heading2';
import SubText from '../../Atoms/Text/SubText';
import { Link } from 'react-router-dom';

function CoursesCard() {
  return (
    <div className="courses-card">
      <div className="courses-card__title">
        <Heading3 text="You may like these courses" />
      </div>
      <div className="courses-card__content">
        <div className="courses-card__content-user">
          <div className="courses-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="courses-card__content-user-info">
            <Heading2 text="UX Foundations: Prototyping" />
            <SubText text="27,959 viewers" />
          </div>
        </div>

        <div className="courses-card__content-user">
          <div className="courses-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="courses-card__content-user-info">
            <Heading2 text="Designing with Adobe XD and pro" />
            <SubText text="9,122 viewers" />
          </div>
        </div>

        <div className="courses-card__content-user">
          <div className="courses-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="courses-card__content-user-info">
            <Heading2 text="UX Foundations: Styles and GUIs" />
            <SubText text="13,858 viewers" />
          </div>
        </div>
      </div>
      <Link className="courses-card__link" to="/stats">
        See all recommendations
      </Link>
    </div>
  );
}

export default CoursesCard;
