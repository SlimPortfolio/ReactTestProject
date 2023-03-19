import React from 'react';
import { Fragment } from "react"
import TabBar from "./TabBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Login() {
    return (
        <div>
            <Fragment>
                <header>
                    <TabBar tabValue={2}/>
                </header>
            </Fragment>
           

            <Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h1>Log-In</h1>
                        <TextField id="username" label="Username" variant="outlined" required="true"/>
                        <br></br>
                        <TextField id="password" label="Password" variant="outlined" required="true"/>
                        <br></br>
                        <Button variant ="contained" size ="small">Submit</Button> 
                    </Box>           
                </Container>
            </Fragment>
        </div>  
    )
}

export default Login;