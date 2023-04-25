/* ---------- Dependencies ---------- */
import React from "react";
import {Paper, TextField, Button} from '@mui/material'

/* ---------- Hooks ---------- */
import useInputState from '../../Hooks/useInputState'

const TodoForm = ({addTodo}) => {

/* ---------- State ---------- */
const [value, handleChange, reset] = useInputState('');

/* ---------- Functions ---------- */
/* ---------- Render ---------- */

return(
    <Paper>
        <form onSubmit={ (e) => {
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
            <TextField value={value} onChange={handleChange}/>
        <Button></Button>
        </form>
        
    </Paper>
    
)

}


export default TodoForm;