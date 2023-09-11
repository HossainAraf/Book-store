import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';
import { AddBookButton } from './Button';
import '../styles/addBook.css';

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
    const id = nanoid();

    dispatch(addBook({
      item_id: id, title, author, category: '',
    }));

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitForm}>
      <h4>Add New Book</h4>
      <div className="actions-wrapper">
        <input
          type="text"
          placeholder="Add Title ..."
          name="title"
          className="add-title"
          value={title}
          onChange={changeTitle} // onChange is a prop that takes a function
        />
        <div className="input-author-wrapper">
          <input
            type="text"
            placeholder="Add Author"
            name="author"
            className="add-author"
            value={author}
            onChange={changeAuthor}
          />
        </div>
        <AddBookButton type="submit">
          ADD BOOK
        </AddBookButton>
      </div>
    </form>
  );
};

export default AddBook;
