import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './AddBook';

const List = ({ books, onDelete }) => (
  <div>
    {books && books.length > 0 ? (
      books.map((book) => (
        <AddBook
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => onDelete(book.id)}
        />
      ))
    ) : (
      <p>No books to display.</p>
    )}
  </div>
);

List.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;
