/* ---------- Dependencies ---------- */
import React from "react";
import {Paper, List} from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos, removeTodo}) => {
    /* ---------- Destructuring Props / States ---------- */



    /* ---------- Render ---------- */
    return(
        <Paper>
        <List>
            {todos.map(t => (
                <>
                    <TodoItem task={t.task} completed={t.completed} key={t.id} removeTodo={removeTodo} id={t.id}/>
                </>
            ))}

        </List>
        </Paper>
    )
}


export default TodoList;
