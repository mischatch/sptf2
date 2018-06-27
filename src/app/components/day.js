import React, { Component } from 'react';
import moment from 'moment';

class Day extends Component {
  hasEvents(){
    const dayy = moment(this.props.day.date._d).format("MMM Do YYYY");
    let events = this.props.events.filter(event => moment(event.day).format("MMM Do YYYY") === dayy);
    return events.length !== 0;
  }

  render() {
    const { day, day: { date, isCurrentMonth, isToday, number }, select, selected  } = this.props;
    const hasEvents = this.hasEvents() ? 'hasEvents' : '';

    return (
      <span
        key={date.toString()}
        className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "") + ' ' + hasEvents}
        onClick={()=>select(day)}>{number}</span>
    );
  }
}

export default Day;
