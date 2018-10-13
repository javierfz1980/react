import React from 'react';
import { withRouter } from 'react-router-dom';
import Back2Home from "../Back2Home/Back2Home";

const Section5 = (props) => {
  const id = props.match.params['id'];
  return (
    <div>
      <h1>Section 5 with id: {id}</h1>
      <Back2Home/>
    </div>
  );
};

export default withRouter(Section5);