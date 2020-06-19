import React from 'react';
import ProfileCardImage from '../../../assets/img/profile-card.png';
import LogoSmall from '../../../assets/img/Logo-small.png';
import LocationArrow from '../../../assets/img/arrow.png';
import dotsVertical from '../../../assets/img/more-vertical.png';
import Edit from '../../../assets/img/Edit.png';
import Heading1 from '../../Atoms/Text/Heading1';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

function ProfileCard({ name, location }) {
  return (
    <div className="profile-card">
      <div className="profile-card__img">
        <img src={ProfileCardImage} alt="ProfileCardImage" />
      </div>
      <div className="profile-card__buttons">
        <Button color="white">
          <img src={Edit} alt="edit profile" />
          <span>Edit Profile</span>
        </Button>
        <Button color="white">
          <img src={dotsVertical} alt="options" />
        </Button>
      </div>

      <div className="profile-card__body">
        <div className="profile-card__user-img">
          <img src="https://picsum.photos/170/170" alt="ProfileCardUser" />
        </div>
        <div className="profile-card__content">
          <div className="profile-card__content-title">
            <div className="profile-card__content-title-name">
              <Heading1 text={name} />
              <img
                className="profile-card__content-logo"
                src={LogoSmall}
                alt="small logo"
              />
            </div>

            <div className="profile-card__content-title-location">
              <img src={LocationArrow} alt="location" />
              <Text text={location} />
            </div>
          </div>
          <p>
            Freelance UX/UI designer, 80+ projects in web design, mobile apps
            (iOS & android) and creative projects. Open to offers.
          </p>
          <div className="profile-card__content-buttons">
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
