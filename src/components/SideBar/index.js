import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Wrapper = styled.section`
  background: #111116;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 10rem;
`;

const Link = styled.div`
  background: #111116;
  color: #5c5c5f;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 2px groove #4c4c5e;
  font-size: 90%;
  font-family: avenir;
  height: 1rem;
  padding: 0.5rem;
  text-align: left;
  -webkit-transition: color 0.45s ease-out;
  transition: color 0.45s ease-out;

  &:hover {
    color: white;
    text-shadow: 0px 0px 1px #fff;
    transition: none;
  }

  &:active {
    color: deeppink;
    text-shadow: 0px 0px 1px deeppink;
  }
`;



export const SideBar = (props) => {
  return (
   <Wrapper>
     <Link>PROJECTS</Link>
     <Link>CONTACT</Link>
     <Link>EXPERIMENTS</Link>
     <Link>WORKS</Link>
     <Link>PROJECTS</Link>
     <Link>CONTACT</Link>
     <Link>EXPERIMENTS</Link>
     <Link>WORKS</Link>
   </Wrapper>
  );
}
