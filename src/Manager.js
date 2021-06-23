import React from 'react'
import './App.css'

function Manager(props) {

    return (
        <li className="manager">
            <p className="items-left">{props.length} items left</p>
            <div className="manager-actions">
                <p onClick={() => props.setFilterAs('')}>All</p>
                <p onClick={() => props.setFilterAs('Active')}>Active</p>
                <p onClick={() => props.setFilterAs('Completed')}>Completed</p>
            </div>
            <p onClick={() => props.clearCompletedTasks('Clear')}>Clear Completed</p>
        </li>
    )
}

export default Manager