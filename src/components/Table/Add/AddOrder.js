import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '../Add/Select/Select';
import Date from './Date/Date';
import './AddOrder.scss';

export default function FormDialog(props) {
  const [solicitante, setSolicitante] = React.useState(props.solicitante);

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" maxWidth="xl">
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <div className="container">
            <Select></Select>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Solicitante"
              type="text"
              fullWidth
              value={solicitante}
              onChange={e => setSolicitante(e.target.value)}
            />
          </div>
          <div className="container">
            <Date title="Fecha" />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Descripción del pedido"
              type="text"
              fullWidth
            />
          </div>
          <div className="container">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Cantidad"
              type="text"
              fullWidth
            />
            <Date title="Fecha de necesidad" />
          </div>
          <div className="container">
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
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            CANCELAR
          </Button>
          <Button onClick={props.handleClose} color="primary">
            AGREGAR PEDIDO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
