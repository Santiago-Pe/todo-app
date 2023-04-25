/* ---------- Dependencies ---------- */
import React, {useState} from "react";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Typography, AppBar, Toolbar, Paper, Grid } from "@mui/material";
import TodoForm from "../TodoForm/TodoForm";

/* ---------- Chiled Component ---------- */
import TodoList from "../TodoList/TodoList";

/* ---------- Component ---------- */
const TodoApp = () => {
    const initialTodos = [
        {id: 1, task: 'Clean bathroom', completed: false},
        {id: 2, task: 'Clean bedroom', completed: true},
        {id: 3, task: 'Clean kitchen', completed: false}
    ]
    /* ---------- States ---------- */
    const [todos, setTodos] = useState(initialTodos);

    /* ---------- Functions ---------- */

    // Add todo
    const addTodo = (newTodoText) => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
    }
    // Delet todo
    const removeTodo = (todoId) => {
        const newTodos = todos.filter( t => t.id !== todoId);
        setTodos(newTodos)
    }
    // Edit todo

    /* ---------- Render ---------- */
    return(
        <Paper 
        style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'

        }}
        elevation={0}
        >
        <AppBar color='primary' position='static' style={{height: '4rem'}}>
            <Toolbar>
                <Typography color='inherit' style={{marginRight: '1rem'}}>
                    TODO APP
                </Typography>
                <PlaylistAddCheckIcon  fontSize='large'/>
                
            </Toolbar>
        </AppBar>
        <Grid  container justifyContent='center' style={{marginTop: '2rem'}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} removeTodo={removeTodo}/>
            </Grid>
        </Grid>
        </Paper>
    )
}

export default TodoApp;