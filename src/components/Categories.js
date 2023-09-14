// IMPORTS
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../redux/categories/categoriesSlice';

// CREATE A COMPONENT
const Categories = () => {
  const dispatch = useDispatch();
  const categoriesStatus = useSelector((state) => state.categories.status);

  const handleUpdateStatus = () => {
    dispatch(updateStatus());
  };

  // RETURN JSX
  return (
    <>
      <h1>Categories</h1>
      <p>
        Status:
        {categoriesStatus}
      </p>
      <button type="button" onClick={handleUpdateStatus}>
        Update Status
      </button>
    </>
  );
};

export default Categories;
