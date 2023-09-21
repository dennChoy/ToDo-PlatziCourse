import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from './ToDoItem';
import { CreateToDoBtn } from "./CreateToDoBtn";
import { ModalTodo } from './ModalTodo';

const defaultTodos = [
  {text: "Tarea uno", completed:true},
  {text: "Tarea dos", completed:true},
  {text: "Tarea tres", completed:false},
  {text: "Tarea cuatro", completed: false},
  {text: "Registrar en gana777", completed: true},
];

const todosFiltered = [];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
 
  const [searchValue, setSearchValue] = React.useState('');
  //console.log('Buscando ' + searchValue);
  const completedTodos = todos.filter(
                          todo => !!todo.completed
                        ).length;
  const totalTodos = todos.length;

  const todosFiltered = todos.filter(
                                        (todo) => {
                                            return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
                                          }
                                          );  

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
                                  (todo) => todo.text === text
                                );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
                                  (todo) => todo.text === text
                                );

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  //Modal
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div className="container p-3" id="container_body">
      <div className="card m-3 p-5">
        <ToDoCounter completed={completedTodos} total={totalTodos}/>
        <ToDoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        
        <ToDoList>
          {todosFiltered.map(todo => (
            <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {completeTodo(todo.text)}}
            onDelete=  {() => {  deleteTodo(todo.text)}}
            />
            ))}
        </ToDoList>
        <CreateToDoBtn handleShow={handleShow} />
        
        <ModalTodo show={show} handleClose={handleClose}/>       

      </div>
    </div>
  );
}

export default App;
