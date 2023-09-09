import React from 'react';
import { Link } from 'react-router-dom';
// import userIcon from '../Assets/user-regular.svg';
import logo from '../Assets/logo.svg';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className={Nav.ul}>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <img id="logo" src={logo} alt="user icon" />
  </nav>
);

export default Nav;
