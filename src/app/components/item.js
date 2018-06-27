import React from 'react';
import moment from 'moment';

const Item = (props) => {
  const day = moment(props.event.day).format("MMM Do YYYY");
  const start = moment(props.event.start).format("HH:mm");
  const end = moment(props.event.end).format("HH:mm");
  return (
    <div className='card-container'>
      <div className='card-time'>
      <span className='card-day'>{day}</span><span className='card-time'>
        from &nbsp; <b> {start} </b> &nbsp; to &nbsp; <b> {end} </b>
      </span>
      </div>
      <h4>{props.event.description}</h4>
    </div>
  );
};

export default Item;
