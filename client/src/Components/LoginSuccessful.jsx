import React from 'react';
import Box from "@mui/material/Box";
import { Fragment } from "react"
import TabBar from './TabBar'; 
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch, useSelector } from 'react-redux';

function LoginSuccessful() {
    const loginStatus = useSelector(state => state.loginStatus.value.toString())
    return (
        <div>
            <Fragment>
                <header>
                    <TabBar tabValue={2}/>
                </header>
            </Fragment>
           

            <Fragment>
                <CssBaseline />
                <Container align="center">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h1>You are logged in!</h1>
                        <p>Please click on the events tab to create and view events!</p>                        
                        <span>login status is: {loginStatus}</span>
                    </Box>           
                </Container>
            </Fragment>
        </div>  
    )
}

export default LoginSuccessful;