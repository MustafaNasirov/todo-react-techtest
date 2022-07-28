import logo from './logo.svg';
import './App.css';
import ToDoBar from './components/ToDoBar/ToDoBar';
import { useState } from "react";

function App() {

    const [todos, setToDos] = useState([]);
    

    // add todos to list
    const addToDo = (event) => {
        if(event.target[0].value == ""){
            alert("please enter a todo")
            return;
        }
        setToDos();
        event.target[0].value = "";
    }

    // remove todo from list
    const removeToDo = () => {

    }


    // clear todos from list
    const reset = () => {
        setToDos();
    }

  return (
    <div className='app-container'>
        <h1>To Do</h1>
        <ToDoBar addToDo={addToDo}/>
    </div>
  );
}

export default App;
