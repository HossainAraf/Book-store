import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';

const BooksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BooksList;
