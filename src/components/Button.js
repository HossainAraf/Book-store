import React from 'react';
import PropTypes from 'prop-types';

export const AddBookButton = ({ onClick, children }) => (
  <button type="submit" onClick={onClick}>
    {children}
  </button>
);

export const RemoveBookButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

AddBookButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

RemoveBookButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
