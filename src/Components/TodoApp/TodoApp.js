/* ---------- Dependencies ---------- */
import React, {useEffect} from "react";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Typography, AppBar, Toolbar, Paper, Grid } from "@mui/material";

/* ---------- Hooks ---------- */
import useTodoState from "../../Hooks/useTodoState";


/* ---------- Chiled Component ---------- */
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

/* ---------- Component ---------- */
const TodoApp = () => {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]'); 
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)
   

    /* ---------- Use Effect ---------- */
    useEffect(() => {
      window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  
    /* ---------- Render ---------- */
    return (
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "4rem" }}>
          <Toolbar>
            <Typography color="inherit" style={{ marginRight: "1rem" }}>
              TODO APP
            </Typography>
            <PlaylistAddCheckIcon fontSize="large" />
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    );
}

export default TodoApp;