import React, { Component } from 'react';

const ComponentLoader = (importComponent) => {

  return class extends Component {

    state = {
      component: null
    };

    componentDidMount() {
      importComponent()
        .then(comp => this.setState({component: comp.default}));
    }

    render () {
      const DynamicComponent =  this.state.component;
      return DynamicComponent ? <DynamicComponent {...this.props} />  : null;
    }

  }

};

export default ComponentLoader;