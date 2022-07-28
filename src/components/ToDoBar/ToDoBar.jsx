

const ToDoBar = ({addToDo, addInputToDo}) => {

    return(
        <div className="todo-bar">
            <input className="todo-bar__input" type="text" onChange={addInputToDo} placeholder="Add a todo ..."/>
            <button onClick={addToDo} className="todo-bar__button" >+</button>
        </div>
    )
}

export default ToDoBar;