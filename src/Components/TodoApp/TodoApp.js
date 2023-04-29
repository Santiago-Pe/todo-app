/* ---------- Dependencies ---------- */
import React from 'react';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Typography, AppBar, Toolbar, Paper, Grid } from "@mui/material";

/* ---------- Chiled Component ---------- */
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

/* ---------- Context ---------- */
import { TodosProvider } from '../../Context/TodoContext';


/* ---------- Component ---------- */
const TodoApp = () => {
   
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
          <TodosProvider>
            <TodoForm  />
            <TodoList />
          </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
    );
}

export default TodoApp;