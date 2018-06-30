import React, { Component } from 'react';
import './App.css';
import Bookshelf from './Bookshelf';
import Header from './Header';
import books from '../books_response';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='App-container'> 
          <Bookshelf books={books}/>
        </div>
      </div>
    );
  }
}

export default App;
