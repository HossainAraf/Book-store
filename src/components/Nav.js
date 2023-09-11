import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li id="nav-book"><Link to="/">BOOKS</Link></li>
      <li id="nav-categories"><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <div id="user-icon">
      <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
    </div>
  </nav>
);

export default Nav;
