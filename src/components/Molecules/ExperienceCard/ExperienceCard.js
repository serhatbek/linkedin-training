import React from 'react';
import Heading1 from '../../Atoms/Text/Heading1';
import Paragraph from '../../Atoms/Text/Paragraph';
import Text from '../../Atoms/Text/Text';
import Group from '../../../assets/img/Group.png';

function ExperienceCard() {
  return (
    <div className="experience-card">
      <Heading1 text="Experience" />

      <div className="experience-card__content">
        <div className="experience-card__content-img">
          <img src={Group} alt="group icon" />
        </div>
        <div className="experience-card__content-box">
          <Paragraph text="Freelance UX/UI designer" />
          <div className="experience-card__content-box-subtitle">
            <Text text="Self Employed" />
            <Text text="Around the world" />
          </div>
          <div className="experience-card__content-box-date">
            <Text text="Jun 2016 — Present" />
            <Text text="3 yrs 3 mos" />
          </div>
          <p className="experience-card__content-box-text">
            Work with clients and web studios as freelancer. Work in next areas:
            eCommerce web projects; creative landing pages; iOs and Android
            apps; corporate web sites and corporate identity sometimes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
