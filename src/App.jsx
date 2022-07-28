import './App.css';
import ToDoBar from './components/ToDoBar/ToDoBar';
import { useState } from "react";
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {

    const [todos, setToDos] = useState([]);

    const [inputToDo, setInputToDo] = useState("");
    

    // add todos to list
    const addToDo = (event) => {

        if(inputToDo == ""){
            alert("please enter a todo")
            return;
        }

        setToDos([...todos, {id: todos.length, info: inputToDo}]);
        setInputToDo("");
    }

    const addInputToDo = (event) => {
        setInputToDo(event.target.value)
    }

    // remove todo from list
    const removeToDo = (id) => {
        setToDos(todos.filter(todo => todo.id != id))
    }

    // clear todos from list
    const reset = () => {
        setToDos([]);
    }

  return (
    <div className='app-container'>
        <h1>To Do</h1>
        <ToDoBar addToDo={addToDo} inputToDo={inputToDo} addInputToDo={addInputToDo}/>
        <ToDoList todos={todos} removeToDo={removeToDo}/>
    </div>
  );
}

export default App;
