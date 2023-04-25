/* ---------- Dependencies ---------- */
import React from "react";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Typography, AppBar, Toolbar, Paper, Grid } from "@mui/material";


const TodoApp = () => {

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

        </Paper>
    )
}

export default TodoApp;