import React, { useState } from 'react';
import './App.css';
import InputTask from './InputTask.js'
import Task from './Task.js'

function App() {
  const [toDo, setToDo] = useState('')
  const sendTask = task => {
    const getAllTasks = [...toDo, task]
    setToDo(getAllTasks)
  }
  const getAllTasks = [...toDo]
  const tasksList = getAllTasks.map((v, i) => <Task key={i} index={i} task={v} />)
  return (
    <section>
      <InputTask sendTask={sendTask} />

      <ul className="c-tasksList">
        {tasksList}
      </ul>
    </section>
  )
}

export default App;
