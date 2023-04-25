/* ---------- Dependencies ---------- */
import React from "react";
import {ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction, Divider} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import  EditIcon from '@mui/icons-material/Edit';

// import {Paper, List, ListItem, Divider, ListItemText} from "@mui/material";

const TodoItem = ({task, completed, removeTodo , id}) => {



    /* ---------- Render ---------- */
    return(
        <>
        <ListItem>
        <Checkbox  checked={completed} tabIndex={-1}/>
        <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {task}
        </ListItemText>
        <ListItemSecondaryAction>

        </ListItemSecondaryAction>
        <IconButton aria-label="Delete"  onClick={ () => removeTodo(id) }>
            
            <DeleteOutlineIcon />  
        </IconButton>
        <IconButton aria-label="Edit">
            <EditIcon /> 
        </IconButton>
        
          
        </ListItem>
        <Divider/>
        </>


    )
}


export default TodoItem;
