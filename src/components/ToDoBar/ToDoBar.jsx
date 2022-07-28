

const ToDoBar = (addToDo) => {

    return(
        <form onSubmit={addToDo} className="todo-bar">
            <input className="todo-bar__input" type="text" placeholder="Add a todo ..."/>
            <button className="todo-bar__button">+</button>
        </form>
    )
}

export default ToDoBar;