import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import BookCard from './Bookcard';
import b from './assets/book.jpg'; 
import b2 from './assets/cat.jpg'
import SearchBar from './SearchBar';

const books = [
  {
    id: '1',
    title: 'Harry Potter and the Philosophers Stone',
    category: 'fantasy',
    author: 'J. K. Rowling',
    pages: 320,
    price: '$50',
    image: b,
  },
  {
    id: '2',
    title: 'the cat in the hat comes back',
    category: 'Childrens literature',
    author: 'Dr.Seuss',
    pages: 72,
    price: '$7',
    image: b2,
  },
];

const App = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="main-content">
    <Header></Header>
        <div className="book-section">
          <h2>Books</h2>
          <SearchBar />
          <div className="book-list">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <button className="add-book-button" onClick={console.log('book added')}>
      +
    </button>
        </div>
      </div>
    </div>
  );
};

export default App;
