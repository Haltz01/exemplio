import React from 'react';
import $ from 'jquery';
import './NavbarHomepage.css';

import logoExemplioWhite from '../assets/logoSVGWhite.svg';
import logoExemplioColored from '../assets/logoSVG.svg';

import { Link } from 'react-router-dom';
import { linkPrefix } from '../options.json'

export default function NavbarHomepage() {
    // Função para mudar design da navbar de acordo com o scroll da página
    $(document).ready(function() {
        $(document).scroll(function() {
            if($(window).scrollTop() > 70) {
                $('.navbarHomepage').addClass("navAfterScroll");
                $('.navbarHomepage').addClass("shadow");
                $('.navbarHomepage ul').removeClass("customNavBarUL");
                $('.imageLogoNavbarHomepage').attr("src", logoExemplioColored);
                $('#becomeMemberButton').addClass(" btn-customHomeAfterScroll");
            }
            else {
                $('.navbarHomepage').removeClass("navAfterScroll");
                $('.navbarHomepage').removeClass("shadow");
                $('.navbarHomepage ul').addClass("customNavBarUL");
                $('.imageLogoNavbarHomepage').attr("src", logoExemplioWhite);
                $('#becomeMemberButton').removeClass(" btn-customHomeAfterScroll");
            }
        });
    });

    return (
        <nav className="navbarHomepage navbar sticky-top navbar-expand-sm navbar-light">
            <div className="container">
                <div className="navbar-header">
                    {/* <!-- Logo--> */}
                    <Link className="navbar-brand" to={`/${linkPrefix}`}>
                        <img src={ logoExemplioWhite } className="imageLogoNavbarHomepage mt-0" alt="Logo Exemplio"/>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSite">
                    <ul className="customNavBarUL navbar-nav d-flex px-4 ml-auto py-2">
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to={`/${linkPrefix}/sobre`}>
                                Sobre nós
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to={`/${linkPrefix}/exemplos`}>
                                Mais exemplos
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-itens-center justify-content-center">
                            <Link id="becomeMemberButton" className="btn-customHome btn text-center py-2 px-4  mx-2" to={`/${linkPrefix }/exemplos`}>
                                Seja membro
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}