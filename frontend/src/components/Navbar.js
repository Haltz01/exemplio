import React, { useEffect, useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom'
import { linkPrefix } from '../options.json';

import logoExemplio from '../assets/logoSVG.svg';



export default function Navbar(props) {
    const [navItemsState, setNavItemsState] = useState({AboutUs: '', ExamplesList: ''});
    useEffect(() => {
        switch(props.activePage) {
            case 'Sobre nós':
                setNavItemsState({AboutUs: 'disabled', ExamplesList: ''});
            break;
            case 'Mais exemplos':
                    setNavItemsState({AboutUs: '', ExamplesList: 'disabled'});
            break;
            default:
                break;
        }
    },[props.activePage]);

    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-light shadow bg-white">
            <div className="container">
                <div className="navbar-header">
                    {/* <!-- Logo--> */}
                    <Link className="navbar-brand" to={`${linkPrefix}/`}>
                        <img src={logoExemplio} className="imageLogoNavbar mt-0" alt="Logo Exemplio"/>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSite">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className={`nav-link mx-2 ${navItemsState.AboutUs}`} to={`${linkPrefix}/sobre`}>
                                Sobre nós 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-2 ${navItemsState.ExamplesList}`} to={`${linkPrefix}/exemplos`}>
                                Mais exemplos
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-itens-center justify-content-center">
                            <Link className={`btn-custom btn text-center py-2 px-2 disabled`} to={`${linkPrefix}/exemplos`}>
                                Seja Membro
                            </Link> 

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}