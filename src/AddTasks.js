import React, { useState } from 'react'

function AddTasks({ addTask }) {
    const [taskName, setTaskName] = useState("");

    return (
        <>
            <form onSubmit={(event) => {
                addTask(taskName);
                setTaskName("");
                event.preventDefault();
            }}>
                <input value={taskName}
                    onChange={event => {
                        setTaskName(event.target.value)
                }}/>
                <input type="submit" value="Add Task" />
            </form>
        </>
    )
}

export default AddTasks;