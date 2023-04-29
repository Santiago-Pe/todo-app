/* ---------- Dependencies ---------- */
import React, {useContext} from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

/* ---------- Chiled Component ---------- */
import EditTodoForm from "../EditTodoForm/EditTodoForm";

/* ---------- Context ---------- */
import { TodosContext } from "../../Context/TodoContext";

/* ---------- Hooks ---------- */
import useToggleState from "../../Hooks/useToggleState";

// import {Paper, List, ListItem, Divider, ListItemText} from "@mui/material";

const TodoItem = ({ task, completed, id }) => {
  /* ---------- State ---------- */
  const [isEditing, toggle] = useToggleState();
  const {dispatch} = useContext(TodosContext)

  /* ---------- Render ---------- */
  return (

    <ListItem style={{height: '70px'}}>
      {isEditing ? (
        <EditTodoForm initialValue={task} id={id} toggleEditForm={toggle}/>
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => dispatch({type: 'TOGGLE', id: id})}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction></ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={() => dispatch({type: 'REMOVE', id: id})}>
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton aria-label="Edit" onClick={() => toggle(!isEditing)}>
            <EditIcon />
          </IconButton>

          
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
