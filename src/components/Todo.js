import React from "react"

const Todo = ({ text,todo,todos,setTodos  }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    return(
        <div className="todo">
             {text}
            <button >
                Check
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                Delete
            </button>

        </div>

    )
}

export default Todo;