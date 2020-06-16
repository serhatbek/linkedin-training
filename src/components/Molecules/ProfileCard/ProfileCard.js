import React from 'react';
import ProfileCardImage from '../../../assets/img/profile-card.png';
import ProfileCardUserImage from '../../../assets/img/user-img.png';
import LogoSmall from '../../../assets/img/Logo-small.png';
import LocationArrow from '../../../assets/img/arrow.png';
import Heading1 from '../../Atoms/Text/Heading1';
import Text from '../../Atoms/Text/Text';

function ProfileCard() {
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
          <Heading1
            text="Dimitry Kargaev"
            className="profile-card__content-username"
          >
            {LogoSmall}
          </Heading1>
          <Text text="Germany" className="profile-card__content-userlocation">
            {LocationArrow}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
