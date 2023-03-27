/* eslint-disable */

import React, { useState } from 'react'
import { TaskItem } from './TaskItem'


export const TaskList = ( {tasks, deleteTask} ) => {
 

  return (
  
      <ul className='tasklist'>
          {tasks.sort((a,b) => b.id - a.id).map(task =>
          <TaskItem key = {task.id}
          task = {task}
          deleteTask = {deleteTask}
          />
        )}
    
   </ul>
  )
}
