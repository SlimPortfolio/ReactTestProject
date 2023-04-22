import React, { Fragment, useEffect, useState } from "react";
import TabBar from "./TabBar";
import EventCard from "./EventCard";
import { Container, Typography } from "@mui/material";
import CreateEvent from './CreateEvent';
import axios from 'axios';

function Events() {
    const [info, getInfo] = useState([]);
    
    useEffect(() => {
        ;(async () => {
            const result = await axios.get('http://localhost:3001')
            getInfo(result.data);
            console.log(result.data)
        })()
    }, [])
    

    // axios.get('localhost:3001')
    //     .then((response) => {
    //         const data = response.data
    //     })
    const data = info;
    // const data = [{"title":"Basketball Game","description":"Watch David take down the Gilstads"},{"title":"Sam Yang Birthday Party","description":"Dude's 12"}];
    console.log([{"title":"Basketball Game","description":"Watch David take down the Gilstads"},{"title":"Sam Yang Birthday Party","description":"Dude's 12"}]);
    
    
    // axios.get('https://api.quotable.io/random')
    
    // const [data, getData] = useState([]);

    // const getAllData = () => {
    //     axios.get('http://localhost:3001')
    //     .then(response => {
    //         const allData = response.data;
    //         getData(allData);
    //     }).catch(err => {
    //         console.log(err)
    //     });
    // }

    // getAllData();
        

    // async function getUserData() {
    //     try {
    //         const response = await axios.get("http://localhost:3001");
    //         console.log(response);
    //     }
    //     catch (error) {
    //         console.log("error");
    //     }
    // }

    // getUserData();
    
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