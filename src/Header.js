import React from 'react';
import './Header.css';

const Header = () => {
  const currentDate = new Date().toDateString();
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="header">
      <div className="date-time">
        <div className="date">{currentDate}</div>
        <div className="time">{currentTime}</div>
      </div>
    </div>
  );
};

export default Header;
