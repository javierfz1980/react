import React, { Component } from 'react';
import logo from './assets/logo.svg';
import cssClasses from './App.css';
import DatePicker from "./DatePicker/DatePicker";

class App extends Component {
  render() {
    return (
      <div className={cssClasses.App}>
        <header className={cssClasses.header}>
          <img src={logo} className={cssClasses.logo} alt="logo" />
          <h1 className={cssClasses.title}>Welcome to React</h1>
        </header>
        <DatePicker/>
      </div>
    );
  }
}

export default App;
