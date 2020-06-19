import React from 'react';
import Heading1 from '../../Atoms/Text/Heading1';
import { Link } from 'react-router-dom';

function AboutCard() {
  return (
    <div className="about-card">
      <Heading1 text="About" />
      <p className="about-card__text">
        I'm more experienced in eCommerce web projects and mobile banking apps,
        but also like to work with creative projects, such as landing pages or
        unusual corporate websites.
      </p>

      <Link className="about-card__link" to="/more">
        See More
      </Link>
    </div>
  );
}

export default AboutCard;
