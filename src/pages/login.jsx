import React from 'react';
import '../styles/login.css';
import MovyLogo from '../ images/movylogo.png';
import {Link} from 'react-router-dom';

function Login(){
    return(       
        <main className="fondo">
            <header className="encabezado">
                <div className="pageName">
                    <img src={MovyLogo}></img>
                </div>
                        
                <div className="access"> 
                    <a>Register</a>
                    <a id='login'>Login</a>
                </div>
            </header>

            <div className="iniciaSecion">
                <h1>Inicia sesión</h1>
                <input id='input'   placeholder="Email o número de teléfono"></input>
                <input id='input' type="password" placeholder="Contraseña" ></input>
                <Link to="/home" id="iniciarSesion">Iniciar sesión</Link>
                <button id='iniciarSesion' type="button" >Iniciar sesión</button>
            </div>
        </main>
    )           
}

export default Login;
