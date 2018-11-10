import React, { Component } from 'react';

import './App.css';
import { Routes } from '../Routes';
import { SideBar } from '../SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        {/* <Routes /> */}
      </div>
    );
  }
}

export default App;
