import React from 'react';
import Heading3 from '../../Atoms/Text/Heading3';
import Text from '../../Atoms/Text/Text';
import '../../../assets/css/main.css';
const UserLoggedin = (props) => {
  return (
    <div className="user-loggedin">
      <div className="user-loggedin__img">
        <img
          src="https://unsplash.it/90/90"
          alt="user"
          className="user-loggedin__img-user"
        />
      </div>
      <div className="user-loggedin__content">
        <div className="user-loggedin__content-profile">
          <Heading3
            text="D. KARGAEV"
            className="user-loggedin__content-profile-user"
          />
          <span className="user-loggedin__content-profile-person">You</span>
        </div>
        <div className="user-loggedin__content-profile">
          <Text
            className="user-loggedin__content-profile-views"
            text="367 views today"
          />
          <Text className="user-loggedin__content-profile-number" text="+32" />
        </div>
      </div>
    </div>
  );
};

export default UserLoggedin;
