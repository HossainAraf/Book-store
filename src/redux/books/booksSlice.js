import { createReducer } from '@reduxjs/toolkit';

// DEFINING CONSTANTS
const AddBook = 'AddBook';
const RemoveBook = 'RemoveBook';

// const { type } = require("@testing-library/user-event/dist/type");

// STATE
const initialBooksState = {
  books: [],
};

//  ACTION CREATORS
// add a book || remove a book

const addBookAction = (title) => ({
  type: AddBook,
  payload: { title },
});

const removeBookAction = (title) => ({
  type: RemoveBook,
  payload: { title },
});

// REDUCER
const bookReducer = createReducer(initialBooksState, {
  [AddBook]: (state, action) => {
    state.books.push(action.payload.title);
  },

  [RemoveBook]: (state, action) => {
    state.books = state.books.filter((book) => book !== action.payload.title);
  },
});

export default bookReducer;
