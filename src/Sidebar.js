import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>School Book Club</h1>
        <br></br>
      </div>
      <ul className="sidebar-menu">
        <li>Books</li>
        <br></br>
        <li>Borrow</li>
        <br></br>
        <li>Borrowed Books</li>
        <br></br>
        <li>Add category</li>
        <br></br>
        <li>Students</li>
        <br></br>
        <li> Monthly subscription fees</li>
      </ul>
    </div>
  );
};

export default Sidebar;
