import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SQNY5l4rmszadPvg3zaz/books'; // 6QJZ6Z2X2X

// CREATE ASYNC THUNK
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(APIurl);
    return response.data;
  },
);
