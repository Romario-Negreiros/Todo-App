import React from 'react'
import './App.css'
import Delete from './images/icon-cross.svg'
import Check from './images/icon-check.svg'

function Task(props) {
    const taskHasBeenDone = () => {
        const paragraph = document.querySelector(`.task${props.index} div p`)
        const circle = paragraph.previousSibling
        const check = circle.firstChild
        if(paragraph.innerHTML.includes('del')) {
            paragraph.innerHTML = props.task
            circle.classList.remove('completed')
            check.src = ''
        } else {
            paragraph.innerHTML = `<del>${props.task}</del>`
            circle.classList.add('completed')
            check.src = Check
        }
    }
    return (
        <li className={`task${props.index} tasks`}>
            <div>
                <div className="circle" onClick={taskHasBeenDone}>
                    <img src="" alt="" />
                </div>
                <p>{props.task}</p>
            </div>
            <div>
                <img className="delete"
                    src={Delete}
                    alt="delete"
                    onClick={() => props.deleteTask(props.index)} />
            </div>
        </li>
    )
}

export default Task