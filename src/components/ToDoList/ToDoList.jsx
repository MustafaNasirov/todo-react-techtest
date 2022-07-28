import ToDo from "../ToDo/ToDo";
import "./ToDoList.scss"

const ToDoList = ({todos, removeToDo}) => {

    const todoArr = todos.map(todo => {
        return (
            <div className="todo__container">
                <ToDo 
                key={todo.id}
                todoID={todo.id}
                todoInfo={todo.info}
                removeToDo={removeToDo}
                />    
            </div>
        )
    }) 

    return <>{todoArr}</>
}

export default ToDoList;