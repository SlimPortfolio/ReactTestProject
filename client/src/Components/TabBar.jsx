import React from "react";
import { Tabs, Tab} from "@mui/material"
import { Link } from "react-router-dom"
import { Fragment } from "react"

const TabBar = (props) => {
    const tabValue = props.tabValue;
    return (
        <Fragment>
            <Tabs value={tabValue}>
                <Tab value={0} component={Link} to="/" label="Home" />
                <Tab value={1} component={Link} to="/events" label="Events"/>
                <Tab value={2} component={Link} to="/login" label="Log In" />
            </Tabs>
            <br/>
        </Fragment>
        
    )
}

export default TabBar;