/* ---------- Dependencies ---------- */
import React, {useState} from "react";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Typography, AppBar, Toolbar, Paper, Grid } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';


/* ---------- Chiled Component ---------- */
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

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
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    }
    // Delet todo
    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter( t => t.id !== todoId);
        setTodos(updatedTodos)
    }

    // Toggle todo
    const toggleTodo = todoID => {
        const updatedTodos = todos.map( t => 
            t.id === todoID ? {...t, completed: !t.completed} : t
        )
        setTodos(updatedTodos)
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
                <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
            </Grid>
        </Grid>
        </Paper>
    )
}

export default TodoApp;