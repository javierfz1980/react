import React from 'react';
import cssClasses from './MonthSelector.css';

const MonthSelector = (props) => {
  console.log('MonthSelector props:', props);
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'agost',
    'september',
    'october',
    'november',
    'december'
  ];

  return (
    <div className={cssClasses.wrapper}>
      <button className={cssClasses.arrow} onClick={props.previousClick}> - </button>
      <div className={cssClasses.label}>{months[props.month]}</div>
      <button className={cssClasses.arrow}  onClick={props.nextClick}> + </button>
    </div>
  )
};

export default MonthSelector;