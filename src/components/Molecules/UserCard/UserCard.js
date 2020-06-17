import React from 'react';
import Heading2 from '../../Atoms/Text/Heading2';
import SubText from '../../Atoms/Text/SubText';
import Button from '../../Atoms/Button/Button';

function UserCard({ name, company, src, alt, onBtnClick }) {
  return (
    <div className="user-card">
      <div className="user-card__img">
        <img className="user-card__img-avatar" src={src} alt={alt} />
      </div>

      <div className="user-card__content">
        <div className="user-card__content-user">
          <Heading2 text={name} />
          <SubText text={company} />
        </div>
        <p className="user-card__content-sub-text">
          "Hey, I saw your works. I like it! Can we do something together? Or
          maybe you have project for UX at the moment?"
        </p>
        <Button color="blue" onClick={onBtnClick} thick>
          Details
        </Button>
      </div>
    </div>
  );
}

export default UserCard;
