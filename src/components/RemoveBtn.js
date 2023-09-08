import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default RemoveButton;
