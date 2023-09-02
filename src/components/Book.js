// Individual Book component
import React from 'react';

const Book = ({ title, author, category }) => (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
    </div>
);

export default Book;
