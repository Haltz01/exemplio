import React from 'react';
import './Navbar.css';


import logoExemplio from '../assets/logoSVG.svg';

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-light shadow bg-white">
            <div className="container">
                <div className="navbar-header">
                    {/* <!-- Logo--> */}
                    <a className="navbar-brand" href="/">
                        <img src={logoExemplio} className="mt-0" width="151" alt="Logo Exemplio"/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSite">
                    <ul className="navbar-nav px-4 ml-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="/sobre">Sobre nós </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/exemplos">Mais exemplos</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-custom py-1 px-4" href="/exemplos">Seja membro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}