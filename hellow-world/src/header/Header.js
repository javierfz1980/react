import logo from "../logo.svg";
import React from "react";
import './Header.css'

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.greeting}</h1>
        </header>);
};

export default Header;