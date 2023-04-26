/* ---------- Dependencies ---------- */
import React from "react";
import {TextField, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

/* ---------- Hooks ---------- */
import useInputState from '../../Hooks/useInputState';

/* ---------- Styles ---------- */
import './EditTodoForm.css'



/* ---------- Hooks ---------- */

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
      className="container-edit-form"
    >
      <TextField
        value={value}
        onChange={handleChange}
        style={{width: '70%'}}
        margin="normal"
        size="small"
        required={true}
        variant='standard'
        autoFocus
       
      />
        <div  className="container-btn">
          <IconButton aria-label="Delete" onClick={() => toggleEditForm()}>
                  <CloseIcon />
          </IconButton>
          <IconButton aria-label="Edit" type="submit">
                  <CheckIcon />
          </IconButton>
        </div>
    </form>
);

}


export default EditTodoForm;