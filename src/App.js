import React, { useState } from 'react';
import './App.css';
import InputTask from './InputTask.js'
import Task from './Task.js'
import Manager from './Manager.js'

function App() {
  const [toDo, setToDo] = useState('')
  const [states, setState] = useState('')
  // Function that receives the task from the input component
  // And then refresh the tasks
  const sendTask = task => {
    const getAllTasks = [...toDo, task]
    setToDo(getAllTasks)
  }
  // Function to delete a task
  const deleteTask = (index, task) => {
    const getAllTasks = [...toDo]
    getAllTasks.splice(index, 1)
    setToDo(getAllTasks)
    if (states.includes(task)) {
      const newStates = states.filter(v => v !== task)
      setState(newStates)
    }
  }
  const taskHasBeenDone = task => {
    const getAllTasks = [...toDo]
    const taskDone = getAllTasks.find(v => v == task)
    const updateStates = [...states]
    if (updateStates.includes(taskDone)) {
      const removeState = updateStates.filter(v => v !== taskDone)
      setState(removeState)
    } else {
      updateStates.push(taskDone)
      setState(updateStates)
    }
  }
  // Creating the task components, and passing the props
  const getAllTasks = [...toDo]
  const tasksList = getAllTasks.map((v, i) => {
    if (states.includes(v)) {
      return <Task
        key={i} index={i} task={v}
        deleteTask={deleteTask}
        taskHasBeenDone={taskHasBeenDone}
        completed={true} />
    } else {
      return <Task
        key={i} index={i} task={v}
        deleteTask={deleteTask}
        taskHasBeenDone={taskHasBeenDone}
        completed={false} />
    }
  })
  return (
    <section>
      <InputTask sendTask={sendTask} />

      <ul className="c-tasksList">

        {tasksList}
      </ul>
    </section>
  )
}

export default App
