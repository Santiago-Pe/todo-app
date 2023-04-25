/* ---------- Dependencies ---------- */
import React from "react";
import {TextField} from '@mui/material'

/* ---------- Hooks ---------- */
import useInputState from '../../Hooks/useInputState'

const EditTodoForm = ({initialValue, editTodo, id, toggleEditForm}) => {

/* ---------- State ---------- */
const [value, handleChange, reset] = useInputState(initialValue);

/* ---------- Functions ---------- */
/* ---------- Render ---------- */

return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{width: '100%'}}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth={true}
        margin="normal"
        label="Edit todo"
        size="small"
        required={true}
        variant='filled'
       
      />
    </form>
);

}


export default EditTodoForm;