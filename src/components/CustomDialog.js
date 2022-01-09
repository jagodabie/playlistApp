import  React,{useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


 const CustomDialog = ({ open, handleClose, playlist })=>  {
   const[name,setName] = useState('');
   const[email,setEmail] = useState('');

   const saveInLocalStorage = () =>{
     playlist.name = name;
     playlist.email = email; 
     console.log(playlist);
     localStorage.setItem('playlist', JSON.stringify(playlist));
     handleClose();
   };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{backgroundColor: '#1f1c1c', color:'white'}}>Save</DialogTitle>
        <DialogContent style={{backgroundColor: '#1f1c1c'}}>
         <form>
          <TextField
           InputLabelProps={{
            style: { color: '#fff'}, 
          }}
            autoFocus
            margin="dense"
            id="name"
            label="Playlist name"
            type="text"
            fullWidth
            variant="standard"
            required
            value={name || ''}
            onChange={(e)=>setName(e.target.value)} 
          />
          <TextField
           InputLabelProps={{
            style: { color: '#fff'}, 
            }}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            required
            onChange={(e)=>setEmail(e.target.value)} 
            value={email || ''}
          />
          </form>
        </DialogContent>
        <DialogActions style={{backgroundColor: '#1f1c1c'}}>
          <Button onClick={handleClose} style={{color:'white'}}>Cancel</Button>
          <Button onClick={saveInLocalStorage}  style={{color:'white'}}>Save</Button>
        </DialogActions >
      </Dialog>
    </div>
  );
}

export default CustomDialog;
