import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state ={
      array:['a','b','c','d','e'],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({
      userInput: val
    })
  }

  render() {
    let filteringStuff = this.state.array.filter((element)=>{
      return element.startsWith(this.state.userInput);
    }).map((element,i)=>{
      return <h2 key={i}>{element}</h2>
    })
    return (
      <div className="App">
          <input onChange={e=>this.handleChange(e.target.value)}></input>
          {filteringStuff}
      </div>
    );
  }
}

export default App;
