import React, {Component} from 'react';
import {AuthConsumer} from "../../contexts/AuthContext";


class Webapp extends Component {
  render() {
    return (
      <AuthConsumer>
        {context => <div>Webapp: {context.isAuthorized.toString()} {context.username}</div>}
      </AuthConsumer>
    )
  }
}

export default Webapp;
