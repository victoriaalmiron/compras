import React from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import Table from './components/Table/Table';
import Login from './components/Login/Login';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/lista" component={Table} />
        </switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
