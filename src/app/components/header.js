import React from 'react';
import moment from 'moment';

const Header = (props) => {
  return (
    <div className='top'>
      Calendar App
      <br/>
      Today is {moment().format("MMM Do YYYY")}
    </div>
  );
};

export default Header;
