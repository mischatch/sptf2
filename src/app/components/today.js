import 'rc-time-picker/assets/index.css';
import React, { Component } from 'react';
import EventForm from './eventForm';

class Today extends Component {
  constructor(props){
    super(props);

    this.state = {
      form: false,
    };

    this.handleForm = this.handleForm.bind(this);
  }


  handleForm(e){
    e.preventDefault();
    this.state.form ? this.setState({form: false}) : this.setState({form: true});
  }

  render(){
    let btnClass = !this.state.form ? 'add-event' : 'add-event_active';
    return (
      <div className='today-block'>
        Add Event!
        <button
          onClick={this.handleForm}
          className={btnClass}>
          <span></span>
        </button>
        {this.state.form? <EventForm
                            selected={this.props.selected}
                            fetchEvents={this.props.fetchEvents}
                            handleForm={this.handleForm}/> : null }
      </div>
    );
  }
}

export default Today;
