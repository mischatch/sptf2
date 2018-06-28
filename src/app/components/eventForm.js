import 'rc-time-picker/assets/index.css';
import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

class EventForm extends Component {
  constructor(props){
    super(props);


      this.state = {
        id: '',
        day: props.selected,
        start: moment(),
        end: moment(),
        description: ''
      };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const { day, start, end, description } = this.state;
    const newEvent = {
      day: day.format("YYYY-MM-DD HH:mm"),
      start: start.format("YYYY-MM-DD HH:mm"),
      end: end.format("YYYY-MM-DD HH:mm"),
      description: description
    };
    fetch('/api/events', {
       method: 'POST',
       body: JSON.stringify(newEvent),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
       .then(res => {
         res.json();
       })
       .then(data => {
         console.log(data);
       })
       .catch(err => {
         console.error(err);
       });
       this.props.fetchEvents();
       this.props.handleForm(e);
  }

  render(){
    return(
      <div>
        <form className='eventForm'>
          <div className='timeform'>
            <div className='start'>
              <label>Start Time</label>
              <TimePicker
                value={this.state.start}
                onChange={(startTime) => this.setState({start: startTime})}
                defaultValue={moment()} showSecond={false} minuteStep={15} />
            </div>
            <div className='end'>
              <label>End Time</label>
              <TimePicker
                value={this.state.end}
                onChange={(endTime) => this.setState({end: endTime})}
                defaultValue={moment()} showSecond={false} minuteStep={15} />
            </div>
          </div>
          <textarea
            value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value})}
            placeholder='Description'></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
