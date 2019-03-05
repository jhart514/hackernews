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

{
    title:'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 2,
    points: 5

}

];

  

class App extends Component {
  render() {
    return (
      <div>
          <span>
           <a href={DataTransferItem.url} >{DataTransferItem.title}</a>  
          </span>
          <span>
              {item.author}
          </span>
          <span>
              {item.num_comments}
          </span>
          <span>
              {item.points}
          </span>
      </div>
    );
  }
}

export default App;
