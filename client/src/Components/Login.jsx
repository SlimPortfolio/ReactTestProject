import React from 'react';
import { Fragment } from "react"
import TabBar from './TabBar'; 
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from '../redux/loginSlice';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        
    };

    const loginStatus = useSelector(state => state.loginStatus.value.toString())
    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

function gatherLoginInfo() {
        setUsername(document.getElementById("username").value)
        setPassword(document.getElementById("password").value)
    }

function submit() {
        axios.post("http://localhost:3001/executeLogin", {
            username: username,
            password: password,
        })
        .then(res => {
            if(res.data == true) {
                dispatch(loginSuccess())
            } else {
                dispatch(loginFailure())
            }
            console.log(res.data)
        
        }).catch(err => console.log("error!"))
    }
    

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
                        <h1>Log-In</h1>                        
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <OutlinedInput
                                id="username"
                                label="Username"
                                onChange ={gatherLoginInfo}
                            />
                        </FormControl>
                        <br></br>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange ={gatherLoginInfo}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <br></br>
                        <Button variant ="contained" size ="medium" onClick={submit}>Submit</Button> 
                        <span>login status is: {loginStatus}</span>
                    </Box>           
                </Container>
            </Fragment>
        </div>  
    )
}

export default Login;