/* ---------- Dependencies ---------- */
import React from "react";
import {Paper, List, ListItem, Divider, ListItemText} from "@mui/material";

const TodoList = (props) => {
    /* ---------- Destructuring Props / States ---------- */
    const {todos} = props


    /* ---------- Render ---------- */
    return(
        <Paper>
        <List>
            {todos.map(t => (
                <>
                <ListItem key={t.id}>
                    <ListItemText>{t.task}</ListItemText>
                </ListItem>
                <Divider/>

                </>
            ))}

        </List>
        </Paper>
    )
}


export default TodoList;
