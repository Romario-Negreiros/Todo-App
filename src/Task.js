import React from 'react'
import './App.css'
import Delete from './images/icon-cross.svg'
import Check from './images/icon-check.svg'

function Task(props) {
    if(!props.completed) {
    return (
        <li className={`task${props.index} tasks`}>
            <div>
                <div 
                    className="circle" 
                    onClick={() => props.taskHasBeenDone(props.task)}>
                    <img src="" alt="" />
                </div>
                <p>{props.task}</p>
            </div>
            <div>
                <img className="delete"
                    src={Delete}
                    alt="delete"
                    onClick={() => props.deleteTask(props.index, props.task)} />
            </div>
        </li>
    )
    } else {
        return (
            <li className={`task${props.index} tasks`}>
                <div>
                    <div 
                        className="circle completed" 
                        onClick={() => props.taskHasBeenDone(props.task)}>
                        <img src={Check} alt="checked" />
                    </div>
                    <p><del>{props.task}</del></p>
                </div>
                <div>
                    <img className="delete"
                        src={Delete}
                        alt="delete"
                        onClick={() => props.deleteTask(props.index, props.task)} />
                </div>
            </li>
        )   
    }
}

export default Task