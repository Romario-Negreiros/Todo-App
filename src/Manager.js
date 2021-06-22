import React from 'react'
import './App.css'

function Manager(props) {

    return (
        <li className="manager">
            <p className="items-left">{props.length} items left</p>
            <div className="manager-actions">
                <p onClick={props.seeAllTasks}>All</p>
                <p onClick={props.seeActiveTasks}>Active</p>
                <p onClick={props.seeCompletedTasks}>Completed</p>
            </div>
            <p onClick={props.clearCompletedTasks}>Clear Completed</p>
        </li>
    )
}

export default Manager