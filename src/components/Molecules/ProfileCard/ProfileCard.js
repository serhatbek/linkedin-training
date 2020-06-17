import React from 'react';
import ProfileCardImage from '../../../assets/img/profile-card.png';
import ProfileCardUserImage from '../../../assets/img/user-img.png';
import LogoSmall from '../../../assets/img/Logo-small.png';
import LocationArrow from '../../../assets/img/arrow.png';
import Heading1 from '../../Atoms/Text/Heading1';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

function ProfileCard({ name, location }) {
  return (
    <div className="profile-card">
      <div className="profile-card__img">
        <img src={ProfileCardImage} alt="ProfileCardImage" />
      </div>

      <div className="profile-card__body">
        <div className="profile-card__user-img">
          <img src={ProfileCardUserImage} alt="ProfileCardUserImage" />
        </div>
        <div className="profile-card__content">
          <div className="profile-card__content-title">
            <Heading1 text={name}>{LogoSmall}</Heading1>
            <Text text={location}>{LocationArrow}</Text>
          </div>
          <p>
            Freelance UX/UI designer, 80+ projects in web design, mobile apps
            (iOS & android) and creative projects. Open to offers.
          </p>
          <div className="user-card__content-buttons">
            <Button color="blue" thick>
              CONTACT INFO
            </Button>
            <Button color="transparent" thick>
              1,043 connections
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
