import React from 'react';
import PropTypes from 'prop-types';
import List from './BookList';

const Categories = ({ books }) => (
  <div>
    <List books={books} />
  </div>
);

Categories.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;
