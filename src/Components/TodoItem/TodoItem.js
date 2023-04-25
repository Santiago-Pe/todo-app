/* ---------- Dependencies ---------- */
import React from "react";
import {ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import  EditIcon from '@mui/icons-material/Edit';

// import {Paper, List, ListItem, Divider, ListItemText} from "@mui/material";

const TodoItem = ({task, completed}) => {



    /* ---------- Render ---------- */
    return(
        <ListItem>
        <Checkbox  checked={completed} tabIndex={-1}/>
        <ListItemText>
            {task}
        </ListItemText>
        <ListItemSecondaryAction>

        </ListItemSecondaryAction>
        <IconButton>
            <EditIcon /> 
        </IconButton>
        <IconButton>
            <DeleteOutlineIcon />  
        </IconButton>
        
          
        </ListItem>


    )
}


export default TodoItem;
