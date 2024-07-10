import React, { useState } from 'react';
import './AddBook.css'; // Import the CSS file

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <div className="card">
      <h1 className="card-title">Add New Book</h1>
      <form className="card-form">
        <div className="form-group">
          <label>Book Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Select a genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Biography">Biography</option>
            <option value="Romance">Romance</option>
            <option value="History">History</option>
          </select>
        </div>
        <div className="form-group">
          <label>Language:</label>
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}



