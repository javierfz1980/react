import React, { Component } from 'react';
import './App.css';
import Login from "./components/login/Login";
import Route from "react-router/es/Route";
import {Switch} from "react-router";
import Webapp from "./components/webapp/Webapp";

class App extends Component {

  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/webapp" component={Webapp} />
        </Switch>
      </section>
    );
  }

}

export default App;
