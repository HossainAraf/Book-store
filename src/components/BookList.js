import React from 'react';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];

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
    </div>
  );
};

export default BooksList;
