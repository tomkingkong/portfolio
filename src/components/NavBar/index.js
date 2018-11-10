import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink to="tomking/projects" >Projects</NavLink>
      <NavLink to="tomking/contact" >Contact</NavLink>
    </nav>
  );
}
