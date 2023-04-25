/* ---------- Dependencies ---------- */
import React from "react";
import {Paper, List, Divider} from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    /* ---------- Destructuring Props / States ---------- */
    const {todos} = props


    /* ---------- Render ---------- */
    return(
        <Paper>
        <List>
            {todos.map(t => (
                <>
                    <TodoItem task={t.task} completed={t.completed} key={t.id}/>
                    <Divider/>
                </>
            ))}

        </List>
        </Paper>
    )
}


export default TodoList;
