import React from 'react'
import './App.css'
import Delete from './images/icon-cross.svg'
import DeleteDark from './images/icon-cross-dark.svg'
import Check from './images/icon-check.svg'

function Task(props) {
    if(!props.checked) {
    return (
        <li className={`task${props.index} tasks tasks-${props.theme}`}>
            <div>
                <div 
                    className="circle" 
                    onClick={() => props.taskHasBeenDone(props.index)}>
                    <img src="" alt="" />
                </div>
                <p>{props.task}</p>
            </div>
            <div>
                <img className={`delete delete-${props.theme}`}
                    src={Delete}
                    alt="delete"
                    onClick={() => props.deleteTask(props.index)} />
                <img className={`deleteDark deleteDark-${props.theme}`}
                    src={DeleteDark}
                    alt="deleteDark"
                    onClick={() => props.deleteTask(props.index)} />
            </div>
        </li>
    )
    } else {
        return (
            <li className={`task${props.index} tasks tasks-${props.theme}`}>
                <div>
                    <div 
                        className="circle completed" 
                        onClick={() => props.taskHasBeenDone(props.index)}>
                        <img src={Check} alt="checked" />
                    </div>
                    <p><del>{props.task}</del></p>
                </div>
                <div>
                    <img className="delete"
                        src={Delete}
                        alt="delete"
                        onClick={() => props.deleteTask(props.index)} />
                    <img className="deleteDark"
                        src={DeleteDark}
                        alt="deleteDark"
                        onClick={() => props.deleteTask(props.index)} />
                </div>
            </li>
        )   
    }
}

export default Task