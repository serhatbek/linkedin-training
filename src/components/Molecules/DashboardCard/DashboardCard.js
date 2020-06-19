import React from 'react';
import Heading3 from '../../Atoms/Text/Heading3';
import { Link } from 'react-router-dom';

function DashboardCard() {
  return (
    <div className="dashboard">
      <div className="dashboard__title">
        <Heading3 text="Your Dashboard" />
        <Link className="dashboard__link" to="/stats">
          Go to Stats
        </Link>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__content-item">
          <p className="dashboard__content-item-number">367</p>
          <p className="dashboard__content-item-text">views today</p>
        </div>

        <div className="dashboard__content-item">
          <p className="dashboard__content-item-number">15</p>
          <p className="dashboard__content-item-text">post views</p>
        </div>

        <div className="dashboard__content-item">
          <p className="dashboard__content-item-number">9</p>
          <p className="dashboard__content-item-text">search appearances</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
