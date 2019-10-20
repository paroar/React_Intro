import React, { useState } from 'react';
import './App.css';

const app = props => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Ir a clase", completed: false },
    { id: 2, name: "Descansar", completed: true }
  ]);

  const tasksList = (props) => {
    return (
      <>
        {props.map(
          ({ id, name, completed }) =>
            <>
              <li key={id}><input type="checkbox" />{name}</li>
            </>
        )}
      </>
    )
  }

  const addTask = () => {

    const input = document.querySelector("#input-add");
    setTasks(tasks.concat(
      { id: tasks.length, name: input.value, completed: false }
    ));
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <ul>
        {tasksList(tasks)}
      </ul>
      <input id="input-add" type="text" placeholder="Task here..." />
      <button onClick={addTask}>Add</button>
    </div>
  );


}



export { app };
