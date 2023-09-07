import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';


const AddBook = () => (
  <form>
    <h4>Add New Book</h4>
    <input
      type="text"
      placeholder="Add Title ..."
      name="title"
      className="add-title"
    />
    <input
      type="text"
      placeholder="Add Author"
      name="author"
      className="add-author"
    />
    <button type="submit" className="add-submit">
      ADD BOOK
    </button>
  </form>
);

export default AddBook;
