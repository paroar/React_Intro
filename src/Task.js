import React from 'react';

function Task({ name }) {
    return (
        <>
            <div className="task"><input type="checkbox" />{name}</div>
        </>
    )
}

export default Task;