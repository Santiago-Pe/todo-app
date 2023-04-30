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
                <div key={t.id}>
                  <TodoItem
                    task={t.task}
                    completed={t.completed}
                    id={t.id}
                  />
                  { i < todos.length - 1 && <Divider/>}
                </div>
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
