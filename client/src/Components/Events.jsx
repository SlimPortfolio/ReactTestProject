import React, { Fragment } from "react";
import TabBar from "./TabBar";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'eventName', headerName: 'Event Name', width: 130 },
    { field: 'eventTime', headerName: 'Event Time', width: 130 },
    {
      field: 'eventDescription',
      headerName: 'Event Description',
      type: 'number',
      width: 200  
    },
  ];
  
  const rows = [
    { id: 1, eventName: 'Snow', eventTime: 'Jon', eventDescription: "We will get together and cook food" },
    { id: 2, eventName: 'Lannister', eventTime: 'Cersei', age: 42 },
    { id: 3, eventName: 'Lannister', eventTime: 'Jaime', age: 45 },
    { id: 4, eventName: 'Stark', eventTime: 'Arya', age: 16 },
    { id: 5, eventName: 'Targaryen', eventTime: 'Daenerys', age: null },
    { id: 6, eventName: 'Melisandre', eventTime: 'null', age: 150 },
    { id: 7, eventName: 'Clifford', eventTime: 'Ferrara', age: 44 },
    { id: 8, eventName: 'Frances', eventTime: 'Rossini', age: 36 },
    { id: 9, eventName: 'Roxie', eventTime: 'Harvey', age: 65 },
  ];


function Events() {
    return (
        <div>
            <Fragment>
                <header>
                    <TabBar tabValue = {1}/>
                </header>
            </Fragment>    

            <Fragment>
                <div style={{ height: 400, width: '60%' }}>

                    <h1>Events</h1>
                    <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    />
                </div>
            </Fragment>
        </div>
    );
}

export default Events;