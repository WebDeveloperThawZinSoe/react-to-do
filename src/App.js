import './reset.css';
import './App.css';
import ToDoListForm from "./components/ToDoListFrom"
import ToDoList from "./components/ToDoList"
import ToDoListFilter from "./components/ToDoListFilter"
import ToDoCheck from "./components/ToDoCheck"
import { useEffect, useState } from 'react';

function App() {
  let [todo,settodo] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3002/todo").then(res => res.json()).then((todos)=>{
      settodo(todos);
    });
  },[]);

  let AddToDo = (todo) =>{
    //update data in server side
    fetch("http://localhost:3002/todo", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(todo),
    });
    //update data in client side
    settodo(prevState=>[...prevState,todo])
  }

  let DeleteToDo = (todoID) => {
    //server Side
    fetch(`http://localhost:3002/todo/${todoID}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    });
    //Cleint Side
    settodo(prevState=>{
      return prevState.filter(todo=>{
        return todo.id != todoID
      })
    });
  } 

  //Update To Do Title
  let UpdateToDO = (toDo) => {
    //toDo
    fetch(`http://localhost:3002/todo/${toDo.id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(toDo),
    });
    //client
    settodo(prevState=>{
      return prevState.map(t => {
        if(t.id == toDo.id){
           return toDo;
        }
        return t;
      })
    })
  }

  //Change Complete
  let ChangeComplete = (completeTask) => {
    fetch(`http://localhost:3002/todo/${completeTask.id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(completeTask),
    });
    //client
    settodo(prevState=>{
      return prevState.map(t => {
        if(t.id == completeTask.id){
           return completeTask;
        }
        return t;
      })
    });
    console.log("app.js")
  }


  //CheckAll
  let checkAll = () => {
    fetch(`http://localhost:3002/todo/9995`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({complete:true}),
    });
    alert(1);
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Thaw Zin Soe Todo App</h2>
        {/* ToDoList Form */}
          <ToDoListForm AddToDo={AddToDo} ></ToDoListForm>
        {/* ToDoList */}
          <ToDoList todolist={todo} deleteIT={DeleteToDo} UpdateToDO={UpdateToDO} ChangeComplete={ChangeComplete}></ToDoList>
        {/* ToDoCheck */}
          <ToDoCheck checkAll={checkAll}></ToDoCheck>
        {/* Filter */}
          <ToDoListFilter ></ToDoListFilter>
      </div>
    </div>
  );
}

export default App;
