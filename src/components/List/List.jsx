import React, { useState, useEffect } from "react";
import data from './data'
import Item from './Item/Item'

const List = () => {
  const [taskArray, setTaskArray] = useState(data)
  const [task, setTask] = useState('')

  function update(e) {
    setTask(e.target.value)
  }

  function addTask(e) {
    e.preventDefault()

    let arrCopy = [...taskArray]
    arrCopy.push(task);

    setTaskArray(arrCopy)

    setTask('')
    document.getElementById('input').value = ''
  }


  function reset() {
    setTaskArray(data)
  }
  return (
    <>
      <form action="">
        <h1>To do list</h1>
        <input id='input' type="text" onChange={(e) => { update(e) }} />
        <button onClick={(e) => { addTask(e) }}>ADD</button>
      </form>
      <ul>
        {
          taskArray.map((element) => {
            return <Item taskArray={taskArray} setTaskArray={setTaskArray} key={element} task={element} />
          })
        }
      </ul>
      <button onClick={() => { reset() }}>Reset</button>
    </>
  )
};

export default List;
