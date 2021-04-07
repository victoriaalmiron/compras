import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '../Add/Select/Select';
//import Select from '@material-ui/core/Select';
import './AddOrder.scss';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="header-button" variant="outlined" color="primary" onClick={handleClickOpen}>
      <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />NUEVO PEDIDO
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nuevo pedido</DialogTitle>
        <DialogContent>
          <Select></Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Solicitante"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Fecha"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descripción del pedido"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Cantidad"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Fecha de necesidad"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Proveedor"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Control de calidad"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCELAR
          </Button>
          <Button onClick={handleClose} color="primary">
            AGREGAR PEDIDO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
