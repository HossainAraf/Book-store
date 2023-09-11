// IMPORT STATEMENTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL:
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GIRQBhlsKPXQAMouEvWh/books';

// ASYNC THUNKS
const fetchBooks = createAsyncThunk('DisplayBooks', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const addBook = createAsyncThunk('AddBook', async (book) => {
  const response = await axios.post(API_URL, book);
  return response.data === 'Created' ? book : null;
});

const removeBook = createAsyncThunk('RemoveBook', async (ITEM_ID) => {
  const response = await axios.delete(`${API_URL}/${ITEM_ID}`);
  return response.data === 'The book was deleted successfully!' ? ITEM_ID : null;
});

// INITIAL STATE
const initialState = {
  books: [],
  error: '',
  loading: 'idle',
};

// REDUX SLICE
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'fetched';
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((bookId) => {
            books.push({ item_id: bookId, ...action.payload[bookId][0] });
          });
          state.books = books;
          if (state.books.length === 0) {
            state.error = 'No books found';
          }
        } else {
          state.error = 'No books found';
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.status = 'succeeded';
          state.error = '';
          state.books.push(action.payload);
        } else {
          state.status = 'failed';
          state.error = 'Unable to add book';
        }
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(removeBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.status = 'succeeded';
          state.error = '';
          state.books = state.books.filter((bookId) => bookId.item_id !== action.payload);
          if (state.books.length === 0) state.error = 'No book was found!';
        } else {
          state.status = 'failed';
          state.error = 'Unable to remove book';
        }
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// EXPORTS: ACTIONS & REDUCER
export { fetchBooks, addBook, removeBook };
export default booksSlice.reducer;
