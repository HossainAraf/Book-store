import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

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
