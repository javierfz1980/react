import React, { Component } from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import cssClasses from './DatePicker.css'

class DatePicker extends Component {

  currentMonth = new Date().getMonth();

  state = {
    currentMonth: this.currentMonth,
    selectedDate: null,
  };

  nextMonthHandler = () => {
    console.log('nextMonthHandler');
    this.setState((prevState) => {
      return {currentMonth: prevState.currentMonth < 11 ? prevState.currentMonth + 1 : 0}
    })
  };

  previousMonthHandler = () => {
    console.log('previousMonthHandler');
    this.setState((prevState) => {
      return {currentMonth: prevState.currentMonth > 0 ? prevState.currentMonth - 1 : 11}
    })
  };

  render() {
    return (
      <div className={cssClasses.wrapper}>
        <Header currentMonth={this.state.currentMonth}
                nextClick={this.nextMonthHandler}
                previousClick={this.previousMonthHandler}/>
        <Body currentMonth={this.state.currentMonth}/>
      </div>
    )
  }
}

export default DatePicker;