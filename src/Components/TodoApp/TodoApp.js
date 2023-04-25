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
        {id: 2, task: 'Clean bedroom', completed: false},
        {id: 3, task: 'Clean kitchen', completed: false}
    ]
    /* ---------- States ---------- */
    const [todos, setTodos] = useState(initialTodos);

    /* ---------- Functions ---------- */
    const addTodo = newTodoText => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
    }

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
        <AppBar color='primary' position='static' style={{height: '64px'}}>
            <Toolbar>
                <Typography color='inherit' style={{marginRight: '20px'}}>
                    TODO APP
                </Typography>
                <PlaylistAddCheckIcon  fontSize='large'/>
                
            </Toolbar>
        </AppBar>
        <TodoList todos={todos}/>
        <TodoForm addTodo={addTodo}/>
        </Paper>
    )
}

export default TodoApp;