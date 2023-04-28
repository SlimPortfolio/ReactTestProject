import React, { Fragment, useEffect, useState } from "react";
import TabBar from "./TabBar";
import EventCard from "./EventCard";
import { Container, Typography } from "@mui/material";
import CreateEvent from './CreateEvent';
import axios from 'axios';

function Events() {
    
    //creating a use state that can be updated
    //useState is a react hook
    const [info, getInfo] = useState([]);
    const data = info;

    //running usestate to access data from API endpoint
    useEffect(() => {
        ;(async () => {
            const result = await axios.get('http://localhost:3001/data')
            getInfo(result.data);
        })()
    }, [])

    function postData() {
        //for axios.post, authorization header can be passed in as third arg.
        axios.post(
            "http://localhost:3001/post", 
            {
                event_title: "Good Morning America",
                event_description: "Everyone's Favorite News show!",
            },
            {
                headers: {
                'Access-Control-Allow-Origin' : 'http://localhost:3000'
                }   
            }
        )
        .then(res => console.log("Result: " + res.data)).catch(err => console.log(err))

    }


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
                    <button onClick={postData}>Test</button>
                </Container>
            </Fragment>
            <Fragment>
                <Container align="center">
                <CreateEvent />
                    <Container style={{marginTop:15}}>
                        {data.map((item) => (
                            <EventCard 
                                title={item.event_title}
                                description={item.event_description}
                                />
                        ))}
                    </Container>
                </Container>
            </Fragment>    
        </div>
    );
}
export default Events;