import React from 'react';

const BookList = () => (
  <div id="books-container">
    <ul id="book-list">
      <li>
        <div className="book-intro">
          <h4>Action</h4>
          <h3>The Hunger Games</h3>
          <h6>Suzanne Collins</h6>
          <ul className="actions">
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="completed-percent">64%</div>
        <div className="progress">
          <h4>CURRENT CHAPTER</h4>
          <h3>Chapter 17</h3>
          <button className="btn-progress" type="button">Progress</button>
        </div>
      </li>
    </ul>
  </div>
);

export default BookList;
