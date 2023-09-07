import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const id = nanoid;

    dispatch(addBook({
      item_id: id, title, author, category: '',
    }));

    setTitle('');
    setAuthor('');
  };

  return (
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
};

export default AddBook;
