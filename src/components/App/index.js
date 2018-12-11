import React, { Component } from 'react';

import './App.css';
import { Routes } from '../Routes';
import Projects from '../../containers/Projects';
import SideBar from '../SideBar';
import Grid from '../Grid';
import Keyboard from '../keyboard';

const styles = {
  display: 'flex'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styles} >
        <SideBar />
        {/* <Projects /> */}
        {/* <Routes /> */}
        {/* <Grid /> */}
        <Keyboard />
      </div>
    );
  }
}

export default App;
