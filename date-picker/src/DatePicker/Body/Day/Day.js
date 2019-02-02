import React from 'react';
import cssClasses from './Day.css';

const Day = (props) => {
  return <div className={cssClasses.day}>{props.day}</div>;
};

export default Day;