import React from 'react';
import { Route } from 'react-router-dom';

import Projects from '../../containers/Projects';
import { Contact } from '../../components/Contact';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';

export const Routes = () => {
  return (
    <div>
      <Route path="/" component={Header} />
      <Route path="/" component={NavBar} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}
