import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  return tasks.map(task =>
    <Task key={task.id} id={task.id} name={task.name} deleteTask={deleteTask} />)
}

export default TaskList;