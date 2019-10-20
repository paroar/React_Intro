import React, { Component } from 'react';
import './App.css';

class App extends Component {

  tasks = [
    { id: 1, name: "Ir a clase", completed: false },
    { id: 2, name: "Descansar", completed: true }
  ];

  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <ul>
          {this.tasksList()}
        </ul>
        <input id="input-add" type="text" placeholder="Task here..." />
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }

  tasksList() {
    return (
      <>
        {this.tasks.map(
          ({ id, name, completed }) =>
            <>
              <li key={id}><input type="checkbox" />{name}</li>
            </>
        )}
      </>
    )
  }

  addTask() {
    const input = document.querySelector("#input-add").value;
    this.tasks.push({ id: this.tasks.length, name: input, completed: false });
  }
}


export { App };
