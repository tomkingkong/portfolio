import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Projects.css';
import Project from '../../components/ProjectCard';

export class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Project />
      </div>
    );
  }
}

export default connect(null, null)(Projects);
