/* eslint-disable */

import { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Todo } from './Todo';
import { TaskList } from './TaskList';

function App() {
const [tasks, setTasks] = useState([])

const addTask = (task) =>{
setTasks (prevState => 
[...prevState, task]
)
}

const deleteTask = (id) =>{
  setTasks(prevState => prevState.filter(e => e.id !== id))
}

  return (
    <div className="App">
      <Header />
      <Todo addTask = {addTask}/>
      {tasks && (<TaskList tasks = {tasks} 
      deleteTask = {deleteTask}
      />)}
      </div>
  );
}

export default App;
