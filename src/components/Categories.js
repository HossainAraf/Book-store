import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesStatus = useSelector((state) => state.categories.status);

  const handleUpdateStatus = () => {
    dispatch(updateStatus());
  };

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
