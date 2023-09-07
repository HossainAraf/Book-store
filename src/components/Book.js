// Individual Book component
// import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <h3>
        Title:
        {title}
      </h3>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={handleRemoveClick}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
