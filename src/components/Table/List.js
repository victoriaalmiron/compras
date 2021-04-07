import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 10, align: 'right' },
  { id: 'area', label: 'AREA', minWidth: 100 },
  { id: 'solicitante', label: 'SOLICITANTE', minWidth: 150 },
  { id: 'fecha', label: 'FECHA', minWidth: 80, align: 'center' },
  { id: 'descripciondelpedido', label: 'DESCRIPCION DEL PEDIDO', minWidth: 200 },
  { id: 'cantidad', label: 'CANTIDAD', minWidth: 80, align: 'right' },
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

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
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
      />
    </Paper>
  );
}