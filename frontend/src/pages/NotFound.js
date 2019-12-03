import React from 'react';
import { Link } from 'react-router-dom';

import { linkPrefix } from '../options.json';
import logoExemplio from '../assets/logos/LogoVertical.svg';
import Navbar from '../components/Navbar.js'

import './NotFound.css';

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="container d-flex flex-column align-items-center">
                <div className="warningBox d-flex flex-column my-4 p-3">
                    <h3 className="warningText m-3"> OPS... </h3>
                    <h4 className="warningDescription m-3"> Parece que a página que você buscava não existe ou não foi encontrada. <br/> 
                    Caso queira voltar a nossa página inicial, basta acessar: </h4>
                    <h5 className="warningLinkExemplio mx-auto m-3"> <Link to={linkPrefix + '/'}> https://exempl.io/ </Link> </h5>

                    <div className="w-50 mx-auto">
                        <Link to={linkPrefix + '/'}>
                            <img className="img-fluid" src={logoExemplio} alt="Logo Exemplio"></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}