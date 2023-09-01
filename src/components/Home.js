import React, { useState } from 'react';
import BookList from './BookList';
import Navigation from './Nav';
import AddBook from './AddBook';

const Home = () => {
  const [books] = useState([]);

  const handleAddBook = () => {
    // Add new book to state
  };

  const handleDeleteBook = () => {
    // Delete book from state
  };

  return (
    <div>
      <Navigation />
      <h2>Home Page</h2>
      <AddBook onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;
