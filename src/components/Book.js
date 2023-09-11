// Individual Book component

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import { RemoveBookButton } from './Button';
import '../styles/book.css';
import progress from '../Assets/progress.png';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div className="book-cover">
        <div className="book-info">
          <h6 className="category">
            {category}
            Action
          </h6>
          <h3 className="title">
            {title}
          </h3>
          <p className="author">
            {author}
          </p>
        </div>
        <div className="book-actions">
          <p className="comments">
            Comments
          </p>
          <span className="remove">
            <RemoveBookButton className="remove-btn" type="button" onClick={handleRemoveClick}>Remove</RemoveBookButton>
          </span>
          <p className="edit">
            Edit
          </p>
        </div>
      </div>
      <div className="progress">
        <img src={progress} alt="progress" />
        <div className="progress-info">
          <p className="parcent">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter-number">Chapter 17</p>
        <button type="button" className="update-progress"><p>UPDATE PROGRESS</p></button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
