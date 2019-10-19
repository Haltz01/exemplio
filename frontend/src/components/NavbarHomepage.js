import React from 'react';
import $ from 'jquery';
import './NavbarHomepage.css';

import logoExemplio from '../assets/logoSVG.svg';

export default function Navbar() {
    // Função para mudar design da navbar de acordo com o scroll da página
    $(document).ready(function() {
        $(document).scroll(function() {
            if($(window).scrollTop() > 80) {
                $('nav').addClass("navAfterScroll");
                $('nav').addClass("shadow");
                $('ul').removeClass("customNavBarUL");
            }
            else {
                $('nav').removeClass("navAfterScroll");
                $('nav').removeClass("shadow");
                $('ul').addClass("customNavBarUL");
            }
        });
    });

    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-light">
            <div className="container">
                <div className="navbar-header">
                    {/* <!-- Logo--> */}
                    <a className="navbar-brand" href="/">
                        <img src={logoExemplio} className="imageLogoNavbar mt-0" alt="Logo Exemplio"/>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSite">
                    <ul className="customNavBarUL navbar-nav d-flex px-4 ml-auto py-2">
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="/sobre">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="/exemplos">Mais exemplos</a>
                        </li>
                        <li className="nav-item d-flex align-itens-center justify-content-center">
                            <a className="btn-customHome btn text-center py-2 px-4  mx-2" href="/exemplos">Seja membro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}