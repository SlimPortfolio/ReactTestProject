import React from "react";
import { Tabs, Tab} from "@mui/material"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import TabBar from "./TabBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Home() {
    return (
        <div>
            <header>
                <TabBar tabValue = {0}/>
            </header>

            <Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Typography textAlign= "center" variant ="h1">Welcome to the Page!</Typography>
                    <ImageList sx={{ width: 900, height: 300 }} cols={3} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList> 
                    <Typography textAlign= "center">Keep track of your events easily! Log in or create an account!</Typography>
                    {/* Create a log in button Here */}
                    <Container align="center" style={{marginTop:15}}>
                        <Button variant ="contained" size ="medium" endIcon={<KeyboardArrowRightIcon />} href="/login">Log In</Button>
                    </Container>      
                </Container>
            </Fragment>
                


        </div>        
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
  ];
export default Home;