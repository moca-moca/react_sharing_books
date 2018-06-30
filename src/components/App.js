import React, { Component } from 'react';
import './App.css';
import Bookshelf from './Bookshelf';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='App-container'> 
          <Bookshelf/>
        </div>
      </div>
    );
  }
}

export default App;
