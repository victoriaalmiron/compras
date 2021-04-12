import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import CreateIcon from '@material-ui/icons/Create';
import Delete from './Delete/Delete';
import AddOrder from './Add/AddOrder';

const columns = [
  { id: 'id', label: 'ID', minWidth: 10, align: 'right' },
  { id: 'area', label: 'AREA', minWidth: 100 },
  { id: 'solicitante', label: 'SOLICITANTE', minWidth: 150 },
  { id: 'fecha', label: 'FECHA', minWidth: 80, align: 'center' },
  { id: 'descripciondelpedido', label: 'DESCRIPCION DEL PEDIDO', minWidth: 400, align: 'center' },
  { id: 'cantidad', label: 'CANTIDAD', minWidth: 10, align: 'right' },
  { id: 'fechadenecesidad', label: 'FECHA DE NECESIDAD', minWidth: 170, align: 'center' },
  { id: 'proveedor', label: 'PROVEEDOR', minWidth: 100 },
  { id: 'recepcion', label: 'RECEPCION', minWidth: 100, align: 'center' },
  { id: 'controldecalidad', label: 'CONTROL DE CALIDAD', minWidth: 170, align: 'center' },
  { id: 'acciones', label: 'ACCIONES', minWidth: 200, align: 'center' },
];

function createData(id, area, solicitante, fecha,descripciondelpedido, cantidad, fechadenecesidad, proveedor, recepcion, controldecalidad) {
  return { id, area, solicitante, fecha, descripciondelpedido, cantidad, fechadenecesidad, proveedor, recepcion, controldecalidad };
}

const rows = [
  createData('1', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', 'MAPSA', '27/03/21', 'A' ),
  createData('2', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('3', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('4', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('5', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('6', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', 'MAPSA', '27/03/21', 'A'),
  createData('7', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('8', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('9', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('10', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('11', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('12', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('13', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('14', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
  createData('15', 'INGENIERIA', 'FRANCO TISANO', '20/03/21', 'BATERIA DE PLOMO', 3, '25/03/21', '', '27/03/21', 'A'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '71vh',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Paper className={classes.root}>
      <AddOrder 
        title={"Editar pedido"}
        handleClose={handleClose}
        open={open}
        solicitante={""} />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.filter(c => c.id !== 'acciones').map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  <TableCell style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                  <CreateIcon onClick={handleClickOpen}/>
                  <Delete />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página"
        labelDisplayedRows={
          ({ from, to, count }) => {
            return '' + from + '-' + to + ' de ' + count
          }
        }
      />
    </Paper>
  );
}
