import React from 'react';
import Heading3 from '../../Atoms/Text/Heading3';
import Heading2 from '../../Atoms/Text/Heading2';
import SubText from '../../Atoms/Text/SubText';
import { Link } from 'react-router-dom';

function VisitorsCard() {
  return (
    <div className="visitors-card">
      <div className="visitors-card__title">
        <Heading3 text="Visitors" />
        <Link className="visitors-card__link" to="/stats">
          VIEW All
        </Link>
      </div>
      <div className="visitors-card__content">
        <div className="visitors-card__content-user">
          <div className="visitors-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="visitors-card__content-user-info">
            <Heading2 text="Darlene Black" />
            <SubText text="HR-manager, 10 000 connec..." />
          </div>
        </div>

        <div className="visitors-card__content-user">
          <div className="visitors-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="visitors-card__content-user-info">
            <Heading2 text="Darlene Black" />
            <SubText text="HR-manager, 10 000 connec..." />
          </div>
        </div>

        <div className="visitors-card__content-user">
          <div className="visitors-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="visitors-card__content-user-info">
            <Heading2 text="Darlene Black" />
            <SubText text="HR-manager, 10 000 connec..." />
          </div>
        </div>

        <div className="visitors-card__content-user">
          <div className="visitors-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="visitors-card__content-user-info">
            <Heading2 text="Darlene Black" />
            <SubText text="HR-manager, 10 000 connec..." />
          </div>
        </div>

        <div className="visitors-card__content-user">
          <div className="visitors-card__content-user-img">
            <img src="https://unsplash.it/52/52" alt="user" />
          </div>
          <div className="visitors-card__content-user-info">
            <Heading2 text="Darlene Black" />
            <SubText text="HR-manager, 10 000 connec..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitorsCard;
