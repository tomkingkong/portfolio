import React, { Component } from 'react';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

const Wrapper = styled.section`
  background: #111116;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  min-width: 8rem;
`;

const Link = styled.div`
  position: relative;
  box-sizing: border-box;
  background: transparent;
  color: #79797a;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 70%;
  font-family: avenir, sans-serif;
  text-align: left;
  height: 1.8rem;
  padding: 0.5rem 0 0 0.5rem;
  overflow: hidden;
  z-index: 1;

  -webkit-transition: color 0.45s ease-out; /* Safari */
  transition: color 0.45s ease-out;

  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;

  &:hover {
    color: white;
    text-shadow: 0px 0px 1px #fff;
    transition: none;
  }

  &:active {
    color: deeppink;
    text-shadow: 0px 0px 5px #fd84c5;
  }

  &:hover > div {
    border-left: 2px groove #fff;
    height: 100%;
  }
`;

const expand = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 2rem;
  }
`;

const Mask = styled.div`
  position: absolute;
  width: 2px;
  height: 0;
  left: 0;
  z-index: -1;
  transition: 
    height 0.45s cubic-bezier(0.695, -0.015, 0.000, 1.650), 
    width 0.25s cubic-bezier(0.680, -0.550, 0.065, 1.650), 
    background 0.15s cubic-bezier(0.695, -0.015, 0.000, 1.650);
`;


export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        "PROJECTS",
        "WORKS",
        "EXPERIMENTS",
        "CONTACT",
      ],
      activeLink: ''
    }
  }

  toggleActive = (event) => {
    let activeLink = event.currentTarget.attributes[`data-id`].value;
    if (this.state.activeLink === activeLink) 
      activeLink = '';
    this.setState({ activeLink });
  }

  renderLinks = (links) => {
    const active = this.state.activeLink;
    const actMask = { 
      height: '100%', 
      width: '10rem',
      background: '#1f1f30', 
      borderLeft: '2px groove deeppink'
    };
    return links.map((link, i) => {
      return (
        <Link 
          style={active === link 
            ? {color: '#fff'} : {}}
          data-id={link} 
          onClick={this.toggleActive} 
          key={i}>
          <Mask 
            style={active === link 
              ? actMask : {}}
          />
          { link }</Link>);
    });
  }

  render() {
    return (
    <Wrapper>
      <div style={{height: '50px'}}></div>
      { this.renderLinks(this.state.links) }
    </Wrapper>
    );
  }
}
