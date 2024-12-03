import React, { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            const taskValue = event.target.value.trim();
            if (taskValue && !tasks.includes(taskValue)) {
                setTasks((prevTasks) => [...prevTasks, taskValue]);
                event.target.value = "";
            } else {
                alert("El campo no puede estar vacio, ni el valor puede repetirse.");
            }
        }
    };

    const removeTask = (taskToRemove) => {
        setTasks((currentTasks) => currentTasks.filter((task) => task !== taskToRemove));
    };

    const clearTasks = () => {
        setTasks([]);
    };

    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className="Todolist">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="que tienes que hacer?" 
                    onKeyDown={handleKeyDown} 
                />
                <ul>
                    {tasks.map((task) => (
                        <li key={task}>
                            {task}
                            <button 
                                className="delete" 
                                onClick={() => removeTask(task)}
                            >
                                <i className="fa-solid fa-x" />
                            </button>
                        </li>
                    ))}
                </ul>
                <p>{tasks.length} {tasks.length === 1 ? "item left" : "items left"}</p>
            </div>
            <button 
                type="button" 
                className="btn btn-success" 
                onClick={clearTasks}
            >
                Delete All
            </button>
        </div>
    );
};

export default TodoList;