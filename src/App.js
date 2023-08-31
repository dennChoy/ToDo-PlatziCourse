import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from './ToDoItem';
import { CreateToDoBtn } from "./CreateToDoBtn";


const defaultTodos = [
  {text: "Tarea uno", completed:true},
  {text: "Tarea dos", completed:true},
  {text: "Tarea tres", completed:false},
  {text: "Tarea cuatro", completed: false}
];


function App() {
  return (
    <div className="container p-3" id="container_body">
      <div className="card m-3 p-5">
        <ToDoCounter completed={16} total={25}/>
        <ToDoSearch />
        
        <ToDoList>
          {defaultTodos.map(todo => (
            <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
            ))}
        </ToDoList>
        <CreateToDoBtn/>
        
      </div>
    </div>
  );
}

export default App;
