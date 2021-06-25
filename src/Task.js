import React from 'react'
import './App.css'
import Delete from './images/icon-cross.svg'
import DeleteDark from './images/icon-cross-dark.svg'
import Check from './images/icon-check.svg'

function Task(props) {
    const { provided, innerRef } = props
    if(!props.checked) {
    return (
        <li 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
            className={`task${props.index} tasks tasks-${props.theme}`}       
            >
            <div>
                <div 
                    className="circle" 
                    onClick={() => props.taskHasBeenDone(props.index)}>
                    <img src="" alt="" />
                </div>
            </div>
            <p>{props.task}</p>
            <div className="adiv" onClick={() => props.deleteTask(props.index)}>
                <img className={`delete delete-${props.theme}`}
                    src={Delete}
                    alt="delete" />
                <img className={`deleteDark deleteDark-${props.theme}`}
                    src={DeleteDark}
                    alt="deleteDark" />
            </div>
        </li>
    )
    } else {
        return (
            <li 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={innerRef}
                className={`task${props.index} tasks tasks-${props.theme}`}>
                <div>
                    <div 
                        className="circle completed" 
                        onClick={() => props.taskHasBeenDone(props.index)}>
                        <img src={Check} alt="checked" />
                    </div>
                </div>
                <p><del>{props.task}</del></p>
                <div className="adiv" onClick={() => props.deleteTask(props.index)}>
                    <img className="delete"
                        src={Delete}
                        alt="delete"
                    />
                    <img className="deleteDark"
                        src={DeleteDark}
                        alt="deleteDark"
                    />
                </div>
            </li>
        )   
    }
}

export default Task