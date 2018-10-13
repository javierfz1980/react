import React from 'react';
import { withRouter } from 'react-router-dom';
import './Back2Home.css';

const Back2Home = (props) => {

  const backToHomeHandler = () => {
    console.log('aca', props);
    props.history.push('/');
  };

  return <h5 className='link-text' onClick={backToHomeHandler}> >>> Home</h5>
};

export default withRouter(Back2Home);