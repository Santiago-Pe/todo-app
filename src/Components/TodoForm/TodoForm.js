/* ---------- Dependencies ---------- */
import React, { useContext } from "react";
import {Paper, TextField, Button} from '@mui/material'

/* ---------- Hooks ---------- */
import useInputState from '../../Hooks/useInputState'

/* ---------- Context ---------- */
import { TodosContext } from "../../Context/TodoContext";

const TodoForm = () => {

/* ---------- State ---------- */
const [value, handleChange, reset] = useInputState('');

const {dispatch} = useContext(TodosContext)
/* ---------- Functions ---------- */
/* ---------- Render ---------- */

return (
  <Paper style={{ margin: "1rem 0" }}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({type: 'ADD', task: value});
        reset();
      }}
      style={{ padding: "1rem" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth={true}
        margin="normal"
        label="Add new todo"
        size="small"
        required={true}
        variant='filled'
       
      />
      <Button></Button>
    </form>
  </Paper>
);

}


export default TodoForm;