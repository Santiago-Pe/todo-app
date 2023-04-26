/* ---------- Dependencies ---------- */
import React from "react";
import {Paper, List, Divider} from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
    /* ---------- Destructuring Props / States ---------- */



    /* ---------- Render ---------- */
    if (todos.length) {
      return (
        <Paper>
          <List>
            {todos.map((t, i) => (
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
               { i < todos.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </Paper>
      );
    }else{
      return null
    }
  
}


export default TodoList;
