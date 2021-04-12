import React from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import AddOrder from './Add/AddOrder';
import List from './List';
import Search from './Search/Search'

import './Table.scss';

const Table = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <React.Fragment>
            <header className="table-header">
                <h1 className="header-title">Pedidos de compras</h1>
                <Button className="header-button" variant="outlined" color="primary" onClick={handleClickOpen}>
                    <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />NUEVO PEDIDO
                </Button>
                <AddOrder 
                    title={"Nuevo pedido"}
                    handleClose={handleClose}
                    open={open}
                    solicitante={""} />
            </header>
            <section className="table-section">
                <Search></Search>
            </section>
            <List />
        </React.Fragment>
    );
}

export default Table;