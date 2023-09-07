import { createSlice} from '@reduxjs/toolkit';

// STATE
const initialBooksState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

// CREATE A SLICE USING createSlice
const bookSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => (
      state.filter((book) => book.item_id !== action.payload)
    ),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
