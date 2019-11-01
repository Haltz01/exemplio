import React from 'react';
import { Link } from 'react-router-dom';

import { linkPrefix } from '../options.json';
import logoExemplio from '../assets/LogoSVGdeitado.svg';

import './NotFound.css';

export default function NotFound() {
    return (
       <div className="container d-flex flex-column align-items-center">
           <div className="warningBox my-4 p-3">
                <h3 className="warningText m-3"> OPS... </h3>
                <h4 className="warningDescription m-3"> Parece que a página que você buscava não existe ou não foi encontrada. <br/> 
                Caso queira voltar a nossa página inicial, basta acessar: </h4>
                <h5 className="warningLinkExemplio m-3"> <Link to={linkPrefix + '/'}> https://exempl.io/ </Link> </h5>
           </div>
           
            <div className="mt-5 w-50">
                <Link to={linkPrefix + '/'}>
                    <img className="img-fluid" src={logoExemplio} alt="Logo Exemplio"></img>
                </Link>
            </div>
       </div>
    );
}