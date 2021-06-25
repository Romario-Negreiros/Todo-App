import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    if (typeof (index) === 'number') {
      const getAllTasks = toDo.filter(v => v.id !== index)
      setToDo(getAllTasks)
    } else if (typeof (index) === 'string') {
      const getAllTasks = toDo.filter(v => {
        if (v.checked === true) {
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
  const setTasks = (v, i) => {
    tasksList.push
      (
        <Draggable draggableId={`${v.id}`} key={v.id} index={i}>
          {provided => (
            <Task
              innerRef={provided.innerRef}
              provided={provided}
              key={v.id} index={v.id}
              task={v.task} checked={v.checked}
              theme={theme}
              deleteTask={deleteTask}
              taskHasBeenDone={taskHasBeenDone}
            >
            </Task>
          )}
        </Draggable>
      )
  }
  const getAllTasks = [...toDo]
  getAllTasks.forEach((v, i) => {
    switch (v.filter) {
      case '': setTasks(v, i)
        break
      case 'Active': if (v.checked === false) setTasks(v, i)
        break
      case 'Completed': if (v.checked === true) setTasks(v, i)
        break
      default: console.error('Filtro inválido')
    }
  })

  // React dnd functions
  const onDragEnd = (result) => {
    try {
      const getAllTasks = [...toDo]
      const [removedElement] = getAllTasks.splice(result.source.index, 1)
      getAllTasks.splice(result.destination.index, 0, removedElement)
      setToDo(getAllTasks)
    }
    catch (err) { console.error(err.message) }
  }
  return (
    <div className="app">
      <Header setTheme={setTheme} theme={theme} toDo={toDo} />
      <section>
        <InputTask sendTask={sendTask} />
        <ul className="c-tasksList">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <ul ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {tasksList}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </ul>
        <Manager
          toDo={toDo}
          setToDo={setToDo}
          length={toDo.length}
          setFilterAs={setFilterAs}
          clearCompletedTasks={deleteTask} />
      </section>
      <p className="dragndrop">Drag and drop to reorder list</p>
    </div>
  )
}

export default App