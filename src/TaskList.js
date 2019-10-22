import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
    return tasks.map(task => <Task key={task.id} name={task.name}/>)
}

export default TaskList;