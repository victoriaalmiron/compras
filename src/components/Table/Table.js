import React from 'react';
//import Button from 'react-bootstrap/Button';
//import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import AddOrder from './Add/AddOrder';
import List from './List'

import './Table.scss';

const Table = () => {
    return(
        <React.Fragment>
            <header className="table-header">
                <h1 className="header-title">Pedidos de compras</h1>
                <AddOrder />
            </header>
            <section className="table-section">
                
            </section>
            <List />
        </React.Fragment>
    );
}

export default Table;