import React from 'react';
// import Books from './Books';
// import userIcon from '../Assets/user-regular.svg';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li to="/">Books</li>
      <li to="/categories">Categories</li>
    </ul>
    {/* <a to="/"><userIcon /></a> */}
  </nav>
);

export default Nav;
