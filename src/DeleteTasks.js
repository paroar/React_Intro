import React, { useState } from 'react'

function DeleteTasks( {deleteTask} ) {
  return (
    <>
      <input type="submit" value="Delete Task" onClick={(event)=>
      //console.log(event.target.parentElement.id)
        deleteTask(event.target.parentElement.id)} />
    </>
  )
}

export default DeleteTasks;