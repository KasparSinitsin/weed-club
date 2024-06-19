import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Consumption</h2>
      <ul>
        <li>
          <Link to="/weed">Weed</Link>
        </li>
        <li>
          <Link to="/hash">Hash</Link>
        </li>
        <li>
          <Link to="/edibles">Edibles</Link>
        </li>
      </ul>
      <h2>Growing</h2>
      <ul>
        <li>
          <Link to="/seeds">Seeds</Link>
        </li>
        <li>
          <Link to="/equipment">Equipment</Link>
        </li>
        <li className="spacer"></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
