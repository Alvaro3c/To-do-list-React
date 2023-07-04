import React, { useState } from "react";
import './Item.css'

const Item = ({ task, setTaskArray, taskArray }) => {
  function deleteTask() {
    const arrCopy = [...taskArray]
    let index = arrCopy.indexOf(task)
    arrCopy.splice(index, 1)
    setTaskArray(arrCopy)
  }

  return (
    <>
      <ul>
        <li>
          <p>
            {task}
          </p>
          <button id="delete-btn" onClick={() => { deleteTask() }}>Delete</button>
        </li>
      </ul>

    </>




  )
};

export default Item;
