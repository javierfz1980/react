import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav";
import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";
import Section3 from "./components/Section3/section3";
import ComponentLoader from './hoc/ComponentLoader'
import Section5 from "./components/Section5/Section5";

class App extends Component {

  sections = [
    {label: 'Section 1', path: '/section1'},
    {label: 'Section 2', path: '/section2'},
    {label: 'Section 3', path: '/section3'},
    {label: 'Lazy', path: '/section4'},
    {label: 'With ID', path: '/section5'}
  ];

  render() {
    const LazyComponent = ComponentLoader(() => import('./components/Section4/Section4'));

    return (
      <div className="App">
        <header className="App-header">
          <Nav sections={this.sections}/>
        </header>
        <section>
          <Switch>
            <Route path="/" exact render={() => <h1>This is the home</h1>} />
            <Route path={this.sections[0].path} exact component={Section1} />
            <Route path={this.sections[1].path} exact component={Section2} />
            <Route path={this.sections[2].path} exact component={Section3} />
            <Route path={this.sections[3].path} exact component={LazyComponent} />
            <Route path={`${this.sections[4].path}/:id`} exact component={Section5} />
            <Route render={() => <h1>Page not found !</h1>} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);
