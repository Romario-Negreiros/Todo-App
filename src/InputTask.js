import React, { useState } from 'react'

function InputTask(props) {
    const [value, setValue] = useState('')
    const updateValue = event => {
        setValue(event.target.value)
    }    
    const getTaskKey = key => {
        if(key.charCode === 13) {
            props.sendTask(value)
            setValue('')
        }
    }
    const getTask = () => {
        props.sendTask(value)
        setValue('')    
    }
    return (    
        <div className="b-taskCreator">
            <div className="circle" onClick={getTask}></div> 
            <input type="text" 
                placeholder="Create a new todo..." 
                value={value} 
                onChange={updateValue} 
                onKeyPress={getTaskKey}
            />
        </div>
    )
}

export default InputTask