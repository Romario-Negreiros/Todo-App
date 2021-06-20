import React, { useState } from 'react';
import './App.css';
import InputTask from './InputTask.js'
import Task from './Task.js'
import Manager from './Manager.js'

function App() {
  const [toDo, setToDo] = useState('')
  // Function that receives the task from the input component
  // And then refresh the tasks
  const sendTask = task => {
    const getAllTasks = [...toDo, task]
    setToDo(getAllTasks)
  }
  // Function to delete a task
  const deleteTask = index => {
    const getAllTasks = [...toDo]
    getAllTasks.splice(index, 1)
    setToDo(getAllTasks)  
  }
  // Creating the task components, and passing the props
  const getAllTasks = [...toDo]
  const tasksList = getAllTasks.map((v, i) => <Task 
    key={i} index={i} task={v} deleteTask={deleteTask} />)
  // Management functions
  const seeAllTasks = () => {
    console.log('fungada')
  }
  const seeActiveTasks = () => {
    console.log('funfed')
  }
  const seeCompletedTasks = () => {
    console.log('funfadenoveo')
  }
  const clearCompletedTasks = () => {
    console.log('funfa')
  }
  return (
    <section>
      <InputTask sendTask={sendTask} />

      <ul className="c-tasksList">
        {tasksList}
        <Manager 
            length={toDo.length} 
            seeAllTasks={seeAllTasks}
            seeActiveTasks={seeActiveTasks}
            seeCompletedTasks={seeCompletedTasks}
            clearCompletedTasks={clearCompletedTasks} />
      </ul>
    </section>
  )
}

export default App;