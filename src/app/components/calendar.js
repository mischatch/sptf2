import React, { Component } from 'react';
import moment from 'moment';
import DayNames from './dayNames';
import Week from './week';
import Today from './today';
import Events from './events';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {
      month: moment(),
      selected: moment().startOf('day'),
      events: [],
      today: [],
    };

    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
    this.getTodayEvents = this.getTodayEvents.bind(this);
  }

  componentWillMount(){
    this.fetchEvents();
  }

  fetchEvents(){
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        this.setState({ events: data });
        this.getTodayEvents(data, this.state.selected);
      })
      .catch(err => console.log(err.message));
  }

  getTodayEvents(data, day){
    let todayEvents = data.filter(event => moment(event.day).format("MMM Do YYYY") === moment(day).format("MMM Do YYYY"));
    this.setState({ today: todayEvents });
  }

  prevMonth(e){
    e.preventDefault();
    const { month } = this.state;
    const newMonth = month.subtract(2, 'month');
    this.setState({
      month: newMonth,
    });
  }

  nextMonth(e){
    e.preventDefault();
    const { month } = this.state;
    const newMonth = month.add(0.1, 'month');
    this.setState({
      month: newMonth,
    });
  }

  daySelect(day){
    this.setState({
     selected: day.date,
     month: day.date.clone(),
   });
   this.getTodayEvents(this.state.events, day.date._d);
  }

  createWeeks(){
    let weeks = [];
    let done = false;
    let date = this.state.month.startOf('month').add('w', -1).day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day)=>this.daySelect(day)}
          selected={selected}
          events={this.state.events}/>
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render(){
    return (
      <div className='cal-today'>
        <section className="calendar">
          <header className="header">
            <div className="month-display row">
              <h1 onClick={this.prevMonth}>◁</h1>
              {this.renderMonthLabel()}
              <h1 onClick={this.nextMonth}>▷</h1>
            </div>
            <DayNames />
          </header>
          {this.createWeeks()}
        </section>
        <Today
          selected={this.state.selected}
          fetchEvents={this.fetchEvents}
          />

          <Events
            events={this.state.events}
            today={this.state.today}
            selected={this.state.selected}
            fetchEvents={this.fetchEvents}
            />
      </div>
   );
  }
}

export default Calendar;
