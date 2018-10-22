import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }
  handleUserChange(val){
    this.setState({
      username: val
    })
  }
  handlePassChange(val){
    this.setState({
      password: val
    })
  }
  handleClick(){
  alert(`Username: ${this.state.username} Password: ${this.state.password}`)}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={e=>this.handleUserChange(e.target.value)}></input>
        <input onChange={e=>this.handlePassChange(e.target.value)}></input>
        <button onClick={()=>this.handleClick()}>Login</button>
      </div>
    );
  }
}

export default App;
