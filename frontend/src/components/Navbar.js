import React, { useEffect, useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom'
import { linkPrefix } from '../options.json';

import logoExemplio from '../assets/logos/logoSVG.svg';



export default function Navbar(props) {
    const [navItemsState, setNavItemsState] = useState({AboutUs: 'disabled', ExamplesList: 'disabled'});
    useEffect(() => {
        switch(props.activePage) {
            case 'Sobre nós':
                setNavItemsState({AboutUs: 'disabled', ExamplesList: ''});
            break;
            case 'Mais exemplos':
                    setNavItemsState({AboutUs: '', ExamplesList: 'disabled'});
            break;
            default:
                setNavItemsState({AboutUs: '', ExamplesList: ''});
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
                <div className="collapse navbar-collapse text-center" id="navbarSite">
                    <ul className="navbar-nav ml-auto">
                        <div className="row">
                            {/* I don't know what's happening here */}
                            <div className="col align-items-center">
                                <li className="nav-item">
                                    <Link className={`nav-link mx-auto px-0 btnNav ${navItemsState.AboutUs}`} to={`${linkPrefix}/sobre`}>
                                        Sobre nós
                                    </Link>
                                </li>
                            </div>
                            <div className="col">
                                <li className="nav-item d-flex justify-content-center mr-0 ">
                                    <Link id="becomeMemberButton" className={`btn-custom btn text-center py-2 px-2 ${navItemsState.ExamplesList}`} to={`${linkPrefix }/exemplos`}>
                                        Ver exemplos
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}