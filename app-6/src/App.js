import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './Todo';

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      todoList: [],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(val){
    this.setState({userInput: val});
  }

  handleClick(){
    this.setState({
      todoList: [...this.state.todoList, this.state.userInput],
      userInput: ''
    });
  }

  render() {
    let item = this.state.todoList.map((element, i)=> <ToDo key={i} thingToDo={element}/>)

    return (
      <div className="App">
      <h1>To-Do list</h1>
        <input value={this.state.userInput} placeholder="Enter new task"onChange={e=>this.handleChange(e.target.value)}></input>
        <button onClick={()=>this.handleClick()}>Add to list</button>
        {item}
      </div>
    );
  }
}

export default App;
