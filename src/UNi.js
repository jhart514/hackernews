import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title:'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
 
 {
     title:'React',
     url: 'https://facebook.github.io/redux/',
     author: 'Dan Abranox',
     num_comments: 2,
     points: 5,
     objectID: 1,
 },
 
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
        {this.state.list.map{item =>
        <div key={item.objectID}>
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
        
        }
 _default;get default() {
    return this._default;
  }
set default(value) {
    this._default = value;
  };
 App}