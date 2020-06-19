import React, { Component } from 'react';
import ProfileCard from '../Molecules/ProfileCard/ProfileCard';
import DashboardCard from '../Molecules/DashboardCard/DashboardCard';
import AboutCard from '../Molecules/AboutCard/AboutCard';
import ProjectsCard from '../Molecules/ProjectsCard/ProjectsCard';
import SkillsCard from '../Molecules/SkillsCard/SkillsCard';
import ExperienceCard from '../Molecules/ExperienceCard/ExperienceCard';
import VisitorsCard from '../Molecules/VisitorsCard/VisitorsCard';
import CoursesCard from '../Molecules/CoursesCard/CoursesCard';

class UserPage extends Component {
  state = {
    userProfile: [],
    id: this.props.match.params
      ? this.props.match.params.id.replace(':', '')
      : 0,
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(`${baseUrl}/${this.state.id}`);
    const data = await response.json();

    this.setState({ userProfile: data });
  };

  render() {
    return (
      <div className="container">
        <div className="user-grid">
          <div className="user-col">
            <ProfileCard
              name={this.state.userProfile.name}
              location={
                this.state.userProfile.address !== undefined
                  ? this.state.userProfile.address.city
                  : ''
              }
            />
            <AboutCard />
            <ProjectsCard />
            <SkillsCard />
            <ExperienceCard />
          </div>
          <div className="user-col">
            <DashboardCard />
            <VisitorsCard />
            <CoursesCard />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
