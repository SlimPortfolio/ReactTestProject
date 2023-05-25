import React from "react";
import { Tabs, Tab, Button, Container} from "@mui/material"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess, logoutUser } from '../redux/loginSlice';

const TabBar = (props) => {
    const loginStatus = useSelector(state => state.loginStatus.value)
    const tabValue = props.tabValue;
    const dispatch = useDispatch()
    
    function logout() {
        dispatch(logoutUser())
    }

    return (
        <Fragment>
            <Tabs value={tabValue} flexContainer>
                <Tab value={0} component={Link} to="/" label="Home" />
                <Tab value={1} component={Link} to="/events" label="Events" />
               
                    <Tab value={2} component={Link} to="/login" label="Log In" />
                
                <Container sx={{ flexGrow: 1 }}></Container>
                {loginStatus &&
                    <Button color="error" onClick={logout}>Logout</Button>
                }
            </Tabs>
            <br/>
        </Fragment>
        
    )
}

export default TabBar;
