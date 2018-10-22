import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './List';
import NewTask from './NewTask';

class App extends Component {
  constructor(){
    super()

    this.state={
      toDoList: [],
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(){
    this.setState({toDoList: [...toDoList, item]});
  }
  render() {
    return (
      <div className="App">
        <h1>To-Do List:</h1>
        <NewTask add={this.addItem}/>
        <Lists toDoStuff={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
