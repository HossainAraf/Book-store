import React from 'react';
import { Link } from 'react-router-dom';
// import userIcon from '../Assets/user-regular.svg';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul className={Nav.ul}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
    {/* <a to="/"><userIcon /></a> */}
  </nav>
);

export default Nav;
