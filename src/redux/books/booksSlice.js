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
const bookReducer = (state = initialBooksState, action) => {
  switch (action.type) {
    case AddBook:
      return {
        ...state,
        books: [...state.books, action.payload.title],
      };

    case RemoveBook:
      return { 
        ...state,
        books: state.books.filter((book) => book !== action.payload.title),
      };

    default:
      return state;
  }
};
