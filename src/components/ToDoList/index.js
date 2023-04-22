import React, { useState } from 'react'
import ToDO from "../../components/ToDo/index"

export default function ToDoList({todolist,deleteIT,UpdateToDO,ChangeComplete}) {

  return (
   
    <>
        <ul className="todo-list">
            
            {todolist.map(toDo => (
                    <ToDO mytoDo={toDo} key={toDo.id} deleteIT={deleteIT} UpdateToDO={UpdateToDO} ChangeComplete={ChangeComplete}></ToDO>  
            ))}


        </ul>
    </>
  )
}
