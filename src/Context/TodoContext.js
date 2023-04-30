/* ---------- Dependencies ---------- */
import React, {createContext} from "react";

/* ---------- Reducers ---------- */
import todosReducer from '../Reducers/TodosReducer'

/* ---------- Hooks ---------- */
import useLocalStorageReducer from "../Hooks/useLocalStorageReducer";

/* ---------- Initial Values ---------- */
const defaultTodos = [
    {id: 1, task: 'Example todo', completed: true},
    {id: 2, task: 'Delete both todos', completed: false}
]
/* ---------- Context ---------- */
export const TodosContext = createContext();
export const DispatchContext = createContext();

/* ---------- Componente ---------- */
export function TodosProvider (props) {

    const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todosReducer);


    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

