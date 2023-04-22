import React, { useState } from 'react'

export default function ToDo({mytoDo,deleteIT,UpdateToDO,ChangeComplete}) {
  let [isEditable,setisEidt] = useState(false)

  let [title,SetTitle] = useState(mytoDo.title);

  let UpdateSubmitHandle = (e) => {
    e.preventDefault();
    // console.log("OK");
    let updatedToDO = {
      id : mytoDo.id,
      title ,
      complete : mytoDo.complete
    }
    setisEidt(false)
    UpdateToDO(updatedToDO)
  }

  let TaskComplete = (e) => {
    e.preventDefault();
    let completeTask = {
      id : mytoDo.id,
      title : mytoDo.title ,
      complete : true
    }
    console.log("ToDo/index.js");
    console.log(completeTask);
    console.log("####");
    ChangeComplete(completeTask)
  }


  
 
  return (
    <>
   <li className="todo-item-container">
                          <div className="todo-item">
                            <form>
                              {mytoDo.complete &&   <input checked  type="checkbox"/>}
                              {!mytoDo.complete &&   <input  onClick={TaskComplete} type="checkbox"/>}
                            </form>
                            {!isEditable &&  <span onDoubleClick={()=>setisEidt(true)} className={`todo-item-label ${mytoDo.complete ? 'line-through' : ''} `}>{mytoDo.title}</span>}
                            <form onSubmit={UpdateSubmitHandle}>
                            {isEditable &&  <input type="text"  onChange={(e)=>SetTitle(e.target.value)} className="todo-item-input" value={title} /> }
                            </form>
                          </div>
                          <button className="x-button" onClick={()=>deleteIT(mytoDo.id)}>
                            <svg
                              className="x-button-icon"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </li>
    </>
  )
}
