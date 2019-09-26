import React from 'react';
import './Navbar.css';

import logoExemplio from '../assets/logoSVG.svg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-fixed-top navbar-light navbar-expand shadow flex-column flex-md-row bd-navbar mb-3">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand pr-full " href="./">
                        <img src={ logoExemplio } className="mt-0" width="151" alt="Exemplio Logo"/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite"> </button>
                <span className="navbar-toggler-icon"></span>
                <div className="collapse navbar-collapse" id="navbarSite">
                    <ul className="navbar-nav px-4 ml-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="./sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./exemplos">Mais exemplos</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-custom py-1 px-4" href="./">Seja membro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}