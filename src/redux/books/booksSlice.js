// DEFINING CONSTANTS
const Add_Book = "Add_Book";
const Remove_Book = "Remove_Book";



const { type } = require("@testing-library/user-event/dist/type");

const initialBooksState = {
  books: [],
};

// ACTION
// add a book
// remove a book
const removeBookAction = () =>  {
      type: Remove_Book,
};

const addBookAction = () =>  {
      type: Add_Book,
};
