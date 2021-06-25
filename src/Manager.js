import React from 'react'
import './App.css'

function Manager(props) {
    
    if (window.innerWidth < 459) {
        return (
            <li className="manager">
                <div className="manager-up">
                    <p className="items-left">{props.length} items left</p>
                    <p onClick={() => props.clearCompletedTasks('Clear')}>Clear Completed</p>
                </div>
                <div className="manager-actions">
                    <p onClick={() => props.setFilterAs('')}>All</p>
                    <p onClick={() => props.setFilterAs('Active')}>Active</p>
                    <p onClick={() => props.setFilterAs('Completed')}>Completed</p>
                </div>
            </li>
        )
    } else {
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
}

export default Manager