import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharComponent from "./components/CharComponent/CharComponent";
import ValidationComponent from "./components/ValidationComponent/ValidationComponent";

class App extends Component {

  minLength = 5;

  // State
  state = {
    text: '',
    validString: false
  };

  // Handlers
  inputChangeHandler = (event) => {
    const text = event.target.value;

    this.setState({
      text: text,
      validString: text.length >= this.minLength
    })
  };

  deleteCharHandler = (idx) => {
    let text = this.state.text.split('');
    text.splice(idx, 1);
    text = text.join('');

    this.setState({
      text: text,
      validString: text.length >= this.minLength
    })
  };

  // Render
  render() {

    const chars = this.state.text
      .split('')
      .map((char, idx) => <CharComponent character={char} key={idx} clicked={() => this.deleteCharHandler(idx)}/>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">char length excercise</h1>
        </header>
        <div className="blockWrapper">
          <input
            placeholder={'enter text'}
            value={this.state.text}
            onChange={this.inputChangeHandler}/>
          <p>{this.state.text}</p>
        </div>
        <div className="blockWrapper">
          <ValidationComponent valid={this.state.validString}/>
        </div>
        <div className="blockWrapper">
          {chars}
        </div>
      </div>
    );
  }
}

export default App;
