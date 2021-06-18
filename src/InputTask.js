import React, { useState } from 'react'

function InputTask(props) {
    const [value, setValue] = useState('')
    const updateValue = event => {
        setValue(event.target.value)
    }    
    const getTask = key => {
        if(key.charCode === 13) props.sendTask(value)
    }
    return (    
        <div className="b-taskCreator">
            <div className="circle"></div> 
            <input type="text" 
                placeholder="Create a new todo..." 
                value={value} 
                onChange={updateValue} 
                onKeyPress={getTask}
            />
        </div>
    )
}

export default InputTask