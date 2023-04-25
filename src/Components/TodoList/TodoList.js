/* ---------- Dependencies ---------- */
import React from "react";
import {Paper, List} from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
    /* ---------- Destructuring Props / States ---------- */



    /* ---------- Render ---------- */
    return (
      <Paper>
        <List>
          {todos.map((t) => (
            <>
              <TodoItem
                task={t.task}
                completed={t.completed}
                key={t.id}
                removeTodo={removeTodo}
                id={t.id}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
            </>
          ))}
        </List>
      </Paper>
    );
}


export default TodoList;
