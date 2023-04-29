/* ---------- Dependencies ---------- */
import React,{useContext} from "react";
import {Paper, List, Divider} from "@mui/material";

/* ---------- Childe Component ---------- */
import TodoItem from "../TodoItem/TodoItem";

/* ---------- Context ---------- */
import { TodosContext } from "../../Context/TodoContext";

const TodoList = () => {
    /* ---------- Destructuring Props / States ---------- */
    const todos = useContext(TodosContext)


    /* ---------- Render ---------- */
    if (todos.length) {
      return (
        <Paper>
          <List>
            {
              todos.map((t, i) => (
                <>
                  <TodoItem
                    task={t.task}
                    completed={t.completed}
                    key={t.id}
                    //{...todos}
                    id={t.id}
                  />
                  { i < todos.length - 1 && <Divider />}
                </>
              ))
            }
          </List>
        </Paper>
      );
    }else{
      return null
    }
  
}


export default TodoList;
