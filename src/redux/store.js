import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    bookReducer,
    categoriesReducer,
  },
});

export default { store };

// import { configureStore } from '@reduxjs/toolkit'
// import usersReducer from './usersReducer'
// import postsReducer from './postsReducer'

// const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     posts: postsReducer,
//   },
// })

// export default store;
