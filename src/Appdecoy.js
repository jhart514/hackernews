import React, { Component } from 'react';
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
     url: 'https://facebook.github.io/redux/',
     author: 'Dan',
     num_comments: 2,
     points: 5
 
 }
 
 ];
 

class App extends Component {
 constructor(props){
  super(props);
  this.state = {
    list,
  };
this.onDismiss = this.onDismiss.bind(this); 
}

onDismiss(id){
const isnotId = item => itmem.objectID !== id;
const updatedList = this.state.list.filter(isnotId);
this.setState({list: updatedList});

  render(); {
    return (
      <div className="App">
        {this.state.list.map(item =>
        <div key={item.objectID}>
          <span><a href ={item.url}>{item.title}></a> </span>
            <span>{item.author}</span>
             <span>{item.author}</span>
              <span>{item.points}</span>
                <span>
          <button
          onClick={() => this.onDismiss(item.objectID)}
          type="button">
          Dismiss
          </button>
          
          </span>
          
          </div>

          </div>
     ) }
     
export default App;