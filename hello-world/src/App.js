import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Intro from "./intro/Intro";

const greeting = "Welcome to react";
const getStarted = "To get started, edit <code>src/App.js</code> and save to reload.";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header greeting={greeting}/>
          <Intro text={getStarted}/>
      </div>
    );
  }
}

export default App;
