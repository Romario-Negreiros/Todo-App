import React, { useState } from 'react'

function InputTask(props) {
    const [task, setTask] = useState('')
    
    return (
        <div className="b-taskCreator">
            <div class="circle"></div> 
            <input type="text" value={task} onChange={props.createTask} />
        </div>
    )
}

export default InputTask