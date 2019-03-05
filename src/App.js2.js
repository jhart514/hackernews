import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
 {
   title:'React',
   url: 'https://facebook.github.io/react/',
   author: 'Jordan Walke',
   num_comments: 3,
   points: 4
  
 },

];

  

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
