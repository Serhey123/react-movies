import { useState } from 'react';
import { StyledBtn } from 'components/StyledBtn/StyledBtn';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogModal({ btn, title, text, agreeFn }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    agreeFn();
    setOpen(false);
  };

  return (
    <div>
      <StyledBtn variant="outlined" onClick={handleClickOpen}>
        {btn}
      </StyledBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StyledBtn onClick={handleClose}>No</StyledBtn>
          <StyledBtn onClick={handleAgree} autoFocus>
            Yes
          </StyledBtn>
        </DialogActions>
      </Dialog>
    </div>
  );
}
