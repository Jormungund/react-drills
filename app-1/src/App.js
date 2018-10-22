import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState( { text: e } )
  }

  render() {
    return (
      <div className="App">
        <input onChange={e=>this.handleChange(e.target.value) }type="text"></input>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
