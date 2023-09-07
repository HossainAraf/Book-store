import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BooksList;
