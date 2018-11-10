import React from 'react';

import './ProjectCard.css';

export const ProjectCard = (props) => {
  return (
    <React.Fragment>
      <div className="ProjectCard">
        <div className="project__content"></div>
        <div className="play__btn">Play</div>
        <div className="code__btn">Check Code</div>
      </div>
      <div className="ex_wrapper">
        <div className="project__content"></div>
        <div className="play__btn">Play</div>
        <div className="code__btn">Check Code</div>
      </div>
    </React.Fragment>
  );
}
