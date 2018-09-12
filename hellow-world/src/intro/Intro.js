import React from "react";

const Intro = (props) => {
  return (
    <p className="App-intro">
        {props.text}
    </p>
  );
};

export default Intro;