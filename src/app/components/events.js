import React, { Component } from 'react';
import moment from 'moment';
import Item from './item';

class Events extends Component {
  constructor(props){
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
    this.renderTodayEvents = this.renderTodayEvents.bind(this);
  }

  renderEvents(){
    if(this.props.events.length === 0){
      return (<h2>No Events</h2>);
    } else {
      return (
        <div>
          {this.props.events.map((event, id) => <Item key={id} event={event}/>)}
        </div>
      );
    }
  }
  renderTodayEvents(){
    if(this.props.today.length === 0){
      return (<h2>No Events this day</h2>);
    } else {
      return (
        <div>
          {this.props.today.map((event, id) => <Item key={id} event={event}/>)}
        </div>
      );
    }
  }


  render(){
    return(
      <div className='events'>
        <div className='all-events'>
          <h1>All Events</h1>
          {this.renderEvents()}
        </div>
        <div className='today-events'>
          <h1>Events on {moment(this.props.selected).format("MMMM Do YYYY")}</h1>
          {this.renderTodayEvents()}
        </div>
      </div>
    );
  }
}

export default Events;
