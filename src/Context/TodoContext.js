/* ---------- Dependencies ---------- */
import React, {createContext, useReducer} from "react";

/* ---------- Reducers ---------- */
import todosReducer from '../Reducers/TodosReducer'

/* ---------- Reducers ---------- */
const defaultTodos = [
    {id: 1, task: 'Example todo', completed: true},
    {id: 2, task: 'Delete both todos', completed: false}
]
/* ---------- Context ---------- */
export const TodosContext = createContext();

/* ---------- Componente ---------- */
export function TodosProvider (props) {

    const [todos, dispatch] = useReducer(todosReducer, defaultTodos);


    return(
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}

