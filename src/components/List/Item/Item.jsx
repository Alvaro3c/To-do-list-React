import React, { useState } from "react";

const Item = ({ task, setTaskArray, taskArray }) => {
  function deleteTask() {
    const arrCopy = [...taskArray]
    let index = arrCopy.indexOf(task)
    arrCopy.splice(index, 1)
    setTaskArray(arrCopy)
  }

  return (
    <>
      <li style={{ display: 'flex', width: '100%', justifyContent: 'space-between', background: 'coral' }}>
        <p>
          {task}
        </p>
        <button onClick={() => { deleteTask() }}>Delete</button>
      </li>

    </>




  )
};

export default Item;
