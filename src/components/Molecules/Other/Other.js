import React from 'react';
import Heading3 from '../../Atoms/Text/Heading3';
import { Link } from 'react-router-dom';
import Dots from '../../../assets/img/more-horizontal.png';

const Other = () => {
  return (
    <div className="menu-other">
      <img src={Dots} alt="dots" />
      <Link to="/">
        <Heading3 text="Other" />
      </Link>
    </div>
  );
};

export default Other;
