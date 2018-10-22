import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      array: ['a','b','c','d','e',]
    }
  }
  render() {
    var arrayStuff = this.state.array.map((element,i)=>{
      return <h2 key={i}>{element}</h2>
    })
    return (
      <div className="App">
        {arrayStuff}
      </div>
    );
  }
}

export default App;
