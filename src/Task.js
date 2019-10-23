import React from 'react';
import DeleteTasks from './DeleteTasks';

function Task({ name, id, deleteTask }) {
  return (
    <>
      <div id={id} className="task">{name}<DeleteTasks deleteTask={deleteTask}></DeleteTasks></div>
    </>
  )
}

export default Task;