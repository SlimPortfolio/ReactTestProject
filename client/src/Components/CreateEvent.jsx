import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useState } from 'react';

function CreateEvent() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function gatherTitle() {
    setTitle(document.getElementById('title').value);
  }
  function gatherDescription() {
    setDescription(document.getElementById('description').value);
  }

  function postData() {
    //for axios.post, authorization header can be passed in as third arg.
    axios.post(
        "http://localhost:3001/post", 
        {
            event_title: title,
            event_description: description,
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
      <Button variant ="contained" onClick={handleClickOpen}>
        Create a new event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a New Event!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new event, fill out the information below and hit the "Create" button when you have finished entering in
            all information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title of Event"
            type="text"
            fullWidth
            variant="standard"
            onChange ={gatherTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Event Description (Time, Location, Etc.)"
            type="text"
            fullWidth
            variant="standard"
            onChange ={gatherDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {postData(); handleClose();}}>Create Event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateEvent;