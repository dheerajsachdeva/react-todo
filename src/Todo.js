import React, { useState } from 'react'

export const Todo = ( {addTask} ) => {
const [task, setTask] = useState("")

const handleChange = (event) =>{
setTask (event.target.value)
}

const handleSubmit = (event) =>{
    event.preventDefault()
addTask ({
    name: task,
    id: Date.now(),
    checked: false
})
setTask("")
}

  return (
    <form method = 'post' onSubmit={handleSubmit}>
    <div className = "todo">
        <input required onChange = {handleChange} value = {task} placeholder = "Add Todo..." type = "text"></input>
        <button className = "btn-submit" type = "submit">Add</button>
    </div>
    </form>
  )
}
