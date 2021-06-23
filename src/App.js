import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import InputTask from './InputTask.js'
import Task from './Task.js'
import Manager from './Manager.js'

function App() {
  const [toDo, setToDo] = useState('')
  const [theme, setTheme] = useState('')
  const tasksList = []
  // Function that receives the task from the input component
  // And then refresh the tasks
  const sendTask = task => {
    const getAllTasks = [...toDo]
    getAllTasks.push({
      id: getAllTasks.length,
      task: task,
      checked: false,
      filter: ''
    })
    setToDo(getAllTasks)
  }
  // Function to delete a task
  const deleteTask = index => {
    if(typeof(index) === 'number') {
      const getAllTasks = toDo.filter(v => v.id !== index)
      setToDo(getAllTasks)
    } else if(typeof(index) === 'string') {
      const getAllTasks = toDo.filter(v => {
        if(v.checked === true) {
          return false
        } else return v
      })
      setToDo(getAllTasks)
    } else console.error('Parâmetro inválido')
  }
  // Function to mark or dismark a task as done
  const taskHasBeenDone = index => {
    const getAllTasks = toDo.map(v => {
      if (v.id === index) {
        v.checked === true ? v.checked = false : v.checked = true
        return v
      } else return v
    })
    setToDo(getAllTasks)
  }
  // Function to manage the list
  const setFilterAs = state => {
    const getAllTasks = [...toDo]
    getAllTasks.forEach(v => v.filter = state)
    setToDo(getAllTasks)
  }
  // Creating the task components, and passing the props
  const setTasks = v => {
    tasksList.push(<Task
      key={v.id} index={v.id} task={v.task} checked={v.checked}
      theme={theme}
      deleteTask={deleteTask}
      taskHasBeenDone={taskHasBeenDone} />)
  }
  const getAllTasks = [...toDo]
  getAllTasks.forEach(v => {
    switch (v.filter) {
      case '': setTasks(v)
        break
      case 'Active': if(v.checked === false) setTasks(v)
        break
      case 'Completed': if(v.checked === true) setTasks(v)
        break
    }
  })

  return (
    <div>
      <Header setTheme={setTheme} theme={theme} toDo={toDo} />
      <section>
        <InputTask sendTask={sendTask} />
        <ul className="c-tasksList">
          {tasksList}
          <Manager
            length={toDo.length}
            setFilterAs={setFilterAs}
            clearCompletedTasks={deleteTask} />
        </ul>
      </section>
    </div>
  )
}

export default App