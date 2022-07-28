import ToDo from "../ToDo/ToDo";

const ToDoList = ({todos, removeToDo}) => {

    const todoArr = todos.map(todo => {
        return (
            <ToDo 
            key={todo.id}
            todoID={todo.id}
            todoInfo={todo.info}
            removeToDo={removeToDo}
            />    
        )
    }) 

    return <>{todoArr}</>
}

export default ToDoList;