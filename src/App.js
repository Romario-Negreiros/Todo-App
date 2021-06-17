import React from 'react';
import './App.css';
import InputTask from './InputTask.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }
  createTask = event => {
    const inputValue = event.target.value
  }
  render() {
    return ( 
      <InputTask createTask={this.createTask} />
    )
  }
}

export default App;
