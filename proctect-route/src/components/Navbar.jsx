import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((user) => user.userInfo.user)
  return (
    <nav className="navbar">
      <h1 className="logo">React</h1>
      <ul className="nav-links">
        {!user && <li><Link to="/login">Login</Link></li>}
        {user && <li><Link to="/logout">Logout</Link></li>}
        {user && <li><Link to="/settings">Settings</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
