import React from 'react';
import MonthSelector from "./MonthSelector/MonthSelector";

const Header = (props) => {
  console.log('Header props:', props);
  return <MonthSelector month={props.currentMonth}
                        nextClick={props.nextClick}
                        previousClick={props.previousClick}/>
};

export default Header;