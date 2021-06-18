import React from 'react'
import './App.css'

function Task(props) {
    return (
        <div className={`task${props.index} tasks`}>
            <div className="circle"></div>
            <p>{props.task}</p>
        </div>
    )
}

export default Task