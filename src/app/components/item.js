import React, { Component } from 'react';
import moment from 'moment';
import EventForm from './eventForm';
import { render } from 'react-dom';

class Item extends Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    const id = this.props.event._id;
    fetch(`/api/events/${id}`, {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
       .then(res => res.json())
       .then(data => {
         console.log(data);
       });
       this.props.fetchEvents();
  }


  render(){
    const day = moment(this.props.event.day).format("MMM Do YYYY");
    const start = moment(this.props.event.start).format("HH:mm");
    const end = moment(this.props.event.end).format("HH:mm");
    return (
      <div className='card-container'>
        <div className='card-time'>
          <span className='card-day'>{day}</span><span className='card-time'>
            from &nbsp; <b> {start} </b> &nbsp; to &nbsp; <b> {end} </b>
          </span>
        </div>
        <h4>{this.props.event.description}</h4>
        <a className='delete' onClick={this.handleDelete}>✕</a>
      </div>
    );
  }
}

export default Item;
