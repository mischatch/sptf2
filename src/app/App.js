import React, { Component } from 'react';
import Header from './components/header';
import Calendar from './components/calendar';


import './App.css';

class App extends Component {
    render(){
      return(
        <div className="App">
          <Header />
          <Calendar />
        </div>
      );
    }
}

export default App;
