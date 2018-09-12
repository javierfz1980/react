import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return <span className="char" onClick={props.clicked}>
      {props.character}
      </span>;
};

export default CharComponent;