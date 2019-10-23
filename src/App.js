import React, { useState } from 'react';
import './App.css';
import AddTasks from './AddTasks';
import TaskList from './TaskList';

const initialTasks = [
  { id: 0, name: "Ir a clase" },
  { id: 1, name: "Descansar" }
]

function App() {

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = taskName => setTasks(
    tasks.concat({ id: tasks.length, name: taskName })
  )

  const deleteTask = taskId => setTasks(
    tasks.filter(task => task.id != taskId)
  )

  return (
    <>
      <AddTasks addTask={addTask}></AddTasks>
      <TaskList tasks={tasks} deleteTask={deleteTask}></TaskList>
    </>
  )
}

export default App;