import React, { Fragment, useEffect, useState } from "react";
import TabBar from "./TabBar";
import EventCard from "./EventCard";
import { Button, Container, Typography } from "@mui/material";
import CreateEvent from './CreateEvent';
import axios from 'axios';
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


function Events() {
    //creating a use state that can be updated
    //useState is a react hook
    const [info, getInfo] = useState([]);
    const data = info;
    const loginStatus = useSelector(state => state.loginStatus.value)
    //running usestate to access data from API endpoint
    useEffect(() => {
        ;(async () => {
            const result = await axios.get('http://localhost:3001/data')
            getInfo(result.data);
        })()
    }, [])

    return (
        <div>
            <Fragment>
                <header>
                    <TabBar tabValue = {1}/>
                </header>
            </Fragment>
            <Fragment>
                <Container maxWidth="md" style={{marginBottom:15}}>
                    <Typography textAlign= "center" variant ="h1">Events List</Typography>
                </Container>
            </Fragment>
            <Fragment>
                <Container align="center">
                {/* add react conditional rendering to only show create event component if user has logged in */}
                {!loginStatus && 
                    <Container>
                        <Typography>Please log in to view events!</Typography>
                        <Container align="center" style={{marginTop:15}}>
                            <Button variant ="contained" size ="medium" endIcon={<KeyboardArrowRightIcon />} href="/login">Log In</Button>
                        </Container>
                    </Container>
                }
                        
                
                {loginStatus && <CreateEvent />}
                {loginStatus && 
                    <Container style={{marginTop:15}}>
                    {data.map((item) => (
                        <EventCard 
                            title={item.event_title}
                            description={item.event_description}
                            />
                    ))}
                </Container>
                }
                </Container>
            </Fragment>    
        </div>
    );
}
export default Events;