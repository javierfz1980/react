import React from 'react';
import Day from './Day/Day';
import cssClasses from './Body.css'

const Body = (props) => {
  const maxDays = 42;
  const now = new Date();
  const fixedDate = new Date(now.getFullYear(), props.currentMonth);
  const weekDaysSource = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startingDay = fixedDate.toString().split(' ')[0];
  const startingWeekDay = weekDaysSource.indexOf(startingDay);
  console.log(fixedDate.toString().split(' '));
  const daysByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  const days = Array(maxDays)
    .fill(0)
    .map((day, idx) => {
      const fixedDay = (idx + 1) - startingWeekDay;
      const dayToShow = fixedDay > 0 && fixedDay <= daysByMonth[props.currentMonth] ? fixedDay : '-';
      return <Day day={dayToShow} key={idx}/>
    });

  const weekDays = weekDaysSource
    .map( (weekday, idx) => <div className={cssClasses.Weekday} key={idx}>{weekday}</div>);

  console.log('currentMonth:', props.currentMonth);
  console.log('fixedDate:', fixedDate);
  console.log('startingDay:', startingDay);
  return (
    <div className={cssClasses.Body}>
      <div id="week-days">{weekDays}</div>
      <div id="body">
        {days}
      </div>
    </div>
  );
};

export default Body;