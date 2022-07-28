import { useState } from "react";


const ToDo = ({todoID, todoInfo, removeToDo}) => {

    const [done, setDone] = useState(false);

    const setDoneCheckBox = () => {
        setDone(!done);
    }

    return(
        <div className="todo">
            <input className="todo__checkbox"></input>
            <button className="todo__button" onClick={removeToDo}>-</button>
        </div>
    )

}

export default ToDo;