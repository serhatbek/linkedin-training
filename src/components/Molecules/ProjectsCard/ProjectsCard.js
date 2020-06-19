import React from 'react';
import { Link } from 'react-router-dom';
import Heading1 from '../../Atoms/Text/Heading1';
import Heading2 from '../../Atoms/Text/Heading2';
import SubText from '../../Atoms/Text/SubText';

function ProjectsCard() {
  return (
    <div className="projects-card">
      <div className="projects-card__title">
        <Heading1 text="Projects" />
        <span>3 of 12</span>
      </div>
      <div className="projects-card__content">
        <div className="projects-card__content-box">
          <div className="projects-card__content-box-img">
            <img src="https://picsum.photos/250/160" alt="project" />
          </div>
          <Heading2 text="Zara redesign concept" />
          <SubText text="UX/UI design, 15.07.2019" />
        </div>
        <div className="projects-card__content-box">
          <div className="projects-card__content-box-img">
            <img src="https://picsum.photos/250/160" alt="project" />
          </div>
          <Heading2 text="Zara redesign concept" />
          <SubText text="UX/UI design, 15.07.2019" />
        </div>
        <div className="projects-card__content-box">
          <div className="projects-card__content-box-img">
            <img src="https://picsum.photos/250/160" alt="project" />
          </div>
          <Heading2 text="Zara redesign concept" />
          <SubText text="UX/UI design, 15.07.2019" />
        </div>
      </div>
      <Link className="projects-card__link" to="/showAll">
        Show All (12)
      </Link>
    </div>
  );
}

export default ProjectsCard;
