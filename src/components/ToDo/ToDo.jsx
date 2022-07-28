import { useState } from "react";


const ToDo = ({todoID, todoInfo, removeToDo}) => {

    const [done, setDone] = useState(false);

    const setDoneCheckBox = () => {
        setDone(!done);
    }

    return(
        <div className="todo">
            <input className="todo__checkbox" type="checkbox" onChange={setDoneCheckBox}></input>
            <label className="todo__box"
            style={done ? {textDecoration: 'line-through'}:{textDecoration:'none'}}>
                {todoInfo}
            
            </label>
            <button className="todo__button" onClick={() => removeToDo(todoID)}>-</button>
        </div>
    )

}

export default ToDo;