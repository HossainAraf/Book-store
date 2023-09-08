import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SQNY5l4rmszadPvg3zaz/books';

// ASYNC ACTIONS
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
  return response.data === 'The book is removed!' ? ITEM_ID : null;
});

// INITIAL STATE
const initialState = {
  books: [],
  error: '',
  status: 'idle',
};

