/* ---------- Dependecies ---------- */
import { v4 as uuidv4 } from 'uuid';

 const reducer = (state, action) => {

/* ---------- Functions ---------- */

    switch(action.type){
        case 'ADD':
            return [...state, {id: uuidv4(), task: action.task, completed: false}];
        case 'REMOVE':
            return state.filter( t => t.id !== action.id);
        case 'EDIT':
            return state.map( t => t.id === action.id ? {...t, task: action.newTask} : t)
        case 'TOGGLE':
            return state.map( t => t.id === action.id ? {...t, completed: !t.completed} : t)
        default:
            return state
    }
}


export default reducer;
