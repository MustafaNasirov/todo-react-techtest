import "./ToDoBar.scss"

const ToDoBar = ({addToDo, inputToDo, addInputToDo}) => {

    return(
        <div className="todo-bar">
            <input className="todo-bar__input" type="text" value={inputToDo} onChange={addInputToDo} placeholder="Add a todo ..."/>
            <button onClick={addToDo} className="todo-bar__button" >+</button>
        </div>
    )
}

export default ToDoBar;