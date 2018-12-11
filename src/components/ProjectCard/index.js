import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectCard = styled.section`
  border-radius: 1rem 2rem 8rem 1rem;
  background: #638EA4;
  position: relative;
  height: 15rem;
  width: 40rem;
  margin: 0.5rem 0; 
`;

const Play = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 140%;
  right: 0.5rem;
  width: 8rem;

  border-radius: 0.5rem 1.5rem 0.5rem 0.5rem;
  background: #C7AD3C;
  top: 0.5rem;
  height: 5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.406);
  }
`;

const Code = styled.div`

`;

export default class Project extends Component {
  render() {
    return (
      <ProjectCard>
        <Play></Play>
      </ProjectCard>
    );
  }
}

{/* <React.Fragment>
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
      </React.Fragment> */}