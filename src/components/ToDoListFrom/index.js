import React, { useState } from 'react'

export default function ToDoListForm({AddToDo}) {
  let [title,setTitle] = useState("");
  let submitHandle = (e) => {
    e.preventDefault();
    setTitle("");
    let todo = {
      id : Math.floor(Math.random() * 10000),
      title ,
      complete : false 
    }
    AddToDo(todo);
    console.log("Hit Data");
  };

  
  return (
    <>
        <form action="#" onSubmit={submitHandle}>
          <input onChange={
            e =>{setTitle(e.target.value)}
          }
          value={title}
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>
    </>
  )
}
