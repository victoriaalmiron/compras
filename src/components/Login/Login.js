import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import Barcode from '../../assets/barcode.png';
import './Login.scss';

const Login = () => {
    return (
        <React.Fragment>
            <div className="Login-header">
                {/* <div className="Login-container">
                    <img src= { Logo } />
                    <input></input>
                    <input></input>
                    <button>Iniciar sesión</button>
                </div> */}
                <div class="container">
                    <div class="card">
                        <section class="right">
                            <img class="img" src= { Barcode } />
                        </section>
                        <section class="left">
                            <form class="form" action="javascript:void(0)">
                                <label class="label" for="Email">Usuario</label>
                                <input class="input" type="email" name="email" id="email" placeholder="Ingrese su nombre de usuario" required />
                                <label class="label" for="contraseña">Contraseña</label>
                                <input class="input" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña" required minlength="8" />
                            </form>
                        </section>
                        <Link to="/lista" className="button">Iniciar sesión</Link>
                    </div>
                    <p className="footer">© 2021 - VOLT motors</p>
                </div>
            </div>   
        </React.Fragment>
    );
}

export default Login;
