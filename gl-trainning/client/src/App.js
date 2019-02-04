import React, { Component } from 'react';
import './App.css';
import Login from "./components/login/Login";
import Route from "react-router/es/Route";
import {Switch} from "react-router";
import Webapp from "./components/webapp/Webapp";
import {AuthProvider} from "./contexts/AuthContext";
import Redirect from "react-router/es/Redirect";

class App extends Component {

  state = {
    auth: {
      isAuthorized: false,
      username: null
    }
  };

  componentWillMount = () => {
    if (localStorage.getItem('token')) {
      this.updateAuthState(localStorage.getItem('username'))
    }
  };

  updateAuthState = (username) => {
    this.setState({
      auth: {
        isAuthorized: true,
        username: username
      }
    })
  };

  render() {
    const LoginComp = (props) => <Login {...props} onLoginSuccess={this.updateAuthState} />;
    return (
      <AuthProvider value={this.state.auth}>
        <section>
          <Switch>
            <Route exact path="/" component={LoginComp} />
            <Route path="/login" render={LoginComp} />
            { this.state.auth.isAuthorized
              ? <Route path="/webapp" component={Webapp} />
              : <Redirect to="/" />}
            <Route component={LoginComp} />
          </Switch>
        </section>
      </AuthProvider>
    );
  }

}

export default App;
