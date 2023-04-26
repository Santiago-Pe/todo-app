import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function useTodoState (initialValue) {
    const [todos, setTodos] = useState(initialValue);

    /* ---------- Functions ---------- */
    
    // Add todo
    const addTodo =  (newTodoText) => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    } 
    // Delet todo
    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter( t => t.id !== todoId);
        setTodos(updatedTodos)
    }
    // Toggle todo
    const toggleTodo = (todoID) => {
        const updatedTodos = todos.map( t => 
            t.id === todoID ? {...t, completed: !t.completed} : t
        )
        setTodos(updatedTodos)
    }
    // Edit todo
    const editTodo = (todoID, newTask) => {
        const updatedTodos = todos.map( t => 
            t.id === todoID ? {...t, task: newTask} : t
        )
        setTodos(updatedTodos)
    }

    /* ---------- Retur ---------- */

    return{
        todos,
        addTodo: addTodo,
        removeTodo: removeTodo,
        toggleTodo: toggleTodo,
        editTodo:editTodo
    }

}


export default useTodoState;