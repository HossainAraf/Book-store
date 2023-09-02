import React from 'react';
import { Link } from 'react-router-dom';
// import userIcon from '../Assets/user-regular.svg';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className={Nav.ul}>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    {/* <a to="/"><userIcon /></a> */}
  </nav>
);

export default Nav;
