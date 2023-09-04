import { createSlice, nanoid } from '@reduxjs/toolkit';

// STATE
const initialBooksState = {
  books: [],
};

// CREATE A SLICE USING createSlice
const bookSlice = createSlice({
  name: 'book',
  initialState: initialBooksState,
  reducers: {
    addBook: (state, action) => {
      const book = {
        id: nanoid(),
        text: action.payload,
      };
      state.books.push(book);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
