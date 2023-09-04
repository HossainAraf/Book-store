import { createSlice } from '@reduxjs/toolkit';

// DEFINING CONSTANTS
const AddBook = 'AddBook';
const RemoveBook = 'RemoveBook';

// STATE
const initialBooksState = {
  books: [],
};

//CREATE A SLICE USING createSlice
const bookSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
  addBook:(state, action) => {
    state.books.push(action.payload.title);
  },
  removeBook: (state, action) => {
    state.books = state.books.filer((book) => book !== action.payload
},
},
});


export default bookReducer;
