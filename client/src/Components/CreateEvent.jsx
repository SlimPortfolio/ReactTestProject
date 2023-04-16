import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CreateEvent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Event Description (Time, Location, Etc.)"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create Event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateEvent;