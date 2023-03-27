import React, { useState } from 'react'

export const TaskItem = ( {task, deleteTask} ) => {

    const [checked, setChecked] = useState(task.checked)

    const handleCheckboxChange = (e) =>{
        setChecked(!checked)
    }

  return (
    <li>
        <div className = "taskItem">
        <input 
        type = "checkbox"
        checked = {checked}
        onChange = {handleCheckboxChange}
        name = {task.name}
        id = {task.id}
        />
        <label htmlFor= {task.id}>
            {task.name}
        </label>
        <button className='btn btn-edit'
        // onClick = {}
        >
        Edit
        </button>
        <button className='btn btn-delete' 
        onClick = {() => deleteTask(task.id) } 
        >
        Delete
        </button>
        </div>
        </li>
  )
}
