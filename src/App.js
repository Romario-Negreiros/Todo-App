import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import InputTask from './InputTask.js'
import Task from './Task.js'
import Manager from './Manager.js'

let state = ''
function App() {
  const [toDo, setToDo] = useState('')
  const [states, setState] = useState('')
  const [filters, setFilter] = useState('')
  const [theme, setTheme] = useState('')
  console.log(theme)
  const tasksList = []
  // Function that receives the task from the input component
  // And then refresh the tasks
  const sendTask = task => {
    state = ''
    const getAllTasks = [...toDo, task]
    setToDo(getAllTasks)
  }
  // Function to delete a task
  const deleteTask = (index, task) => {
    state = ''
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
    const taskDone = getAllTasks.find(v => v === task)
    const updateStates = [...states]
    if (updateStates.includes(taskDone)) {
      const removeState = updateStates.filter(v => v !== taskDone)
      setState(removeState)
    } else {
      updateStates.push(taskDone)
      setState(updateStates)
    }
  }
  // Management functions
  const seeAllTasks = () => {
    state = 'All Tasks'
    setFilter(toDo)
    console.log('Now seeing all tasks!')
  }
  const seeActiveTasks = () => {
    state = 'Active Tasks'
    if (toDo === '') console.error('Todo list is empty')
    else {
      const activeTasks = toDo.filter(v => !states.includes(v))
      setFilter(activeTasks)
      console.log('Now seeing active tasks only!')
    }
  }
  const seeCompletedTasks = () => {
    state = 'Completed Tasks'
    if (toDo === '') console.error('Todo list is still empty')
    else {
      const completedTasks = toDo.filter(v => states.includes(v))
      setFilter(completedTasks)
      console.log('Now seeing completed tasks only!')
    }
  }
  const clearCompletedTasks = () => {
    state = ''
    if (toDo === '') console.error('Todo list is still empty')
    else {
      const clearCompletedTasks = toDo.filter(v => !states.includes(v))
      setToDo(clearCompletedTasks)
      console.log('Completed tasks deleted from tasks list!')
    }
  }
  // Creating the task components, and passing the props
  if (state === '') {
    console.log('eu aqui')
    const getAllTasks = [...toDo]
    getAllTasks.forEach((v, i) => {
      if (states.includes(v)) {
        tasksList.push(<Task
          theme={theme}
          key={i} index={i} task={v}
          deleteTask={deleteTask}
          taskHasBeenDone={taskHasBeenDone}
          completed={true}
          state={state} />)
      } else {
        tasksList.push(<Task
          theme={theme}
          key={i} index={i} task={v}
          deleteTask={deleteTask}
          taskHasBeenDone={taskHasBeenDone}
          completed={false}
          state={state} />)
      }
    })
  } else {
    const getAllTasks = [...filters]
    getAllTasks.forEach((v, i) => {
      if (states.includes(v)) {
        tasksList.push(<Task
          theme={theme}
          key={i} index={i} task={v}
          deleteTask={deleteTask}
          taskHasBeenDone={taskHasBeenDone}
          completed={true}
          state={state} />)
      } else {
        tasksList.push(<Task
          theme={theme}
          key={i} index={i} task={v}
          deleteTask={deleteTask}
          taskHasBeenDone={taskHasBeenDone}
          completed={false}
          state={state} />)
      }
    })
  }
  return (
    <div>
      <Header setTheme={setTheme} theme={theme} toDo={toDo} />
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
    </div>
  )
}

export default App