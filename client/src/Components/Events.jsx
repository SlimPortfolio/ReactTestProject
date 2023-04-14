import React, { Fragment } from "react";
import TabBar from "./TabBar";
import EventCard from "./EventCard";
import { Container, Typography } from "@mui/material";


function Events() {
    const data = [{"title":"Basketball Game","description":"Watch David take down the Gilstads"},{"title":"Sam Yang Birthday Party","description":"Dude's 12"}];
    return (
        <div>
            <Fragment>
                <header>
                    <TabBar tabValue = {1}/>
                </header>
            </Fragment>
            <Fragment>
                <Container maxWidth="md">
                    <Typography textAlign= "center" variant ="h1">Events List</Typography>
      
                </Container>
            </Fragment>
            <Fragment>
                {data.map((item) => (
                    <EventCard 
                        title={item.title}
                        description={item.description}
                        />
                ))}
            </Fragment>    
        </div>
    );
}
export default Events;