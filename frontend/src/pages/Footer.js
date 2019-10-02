import React from 'react';
import "./Footer.css";

import FacebookIcon from '../assets/facebook-app-logo.svg';
import InstagramIcon from '../assets/instagram-logo.svg';
import TwitterIcon from '../assets/twitter-logo.svg';



export default function Footer() {
    return (
        <div className="container align-items-center my-4 py-3 border border-info"> 
            <div className="footerText row justify-content-center text-center mt-1">
                Todos os direitos reservados - exemplio 2019.
            </div>
            <div className="footerText row justify-content-center text-center mb-1">
                Termos de uso e política de privacidade
            </div>
            <div className="row justify-content-center mt-3"> { /* ARRUMAR TAMANHO DOS ICONES */ }
                <div className="mx-2 col"> 
                    <img className="img-fluid" src={ FacebookIcon } alt="Facebook Icon" />
                </div>
                <div className="mx-2 col"> 
                    <img className="img-fluid" src={ TwitterIcon } alt="Twitter Icon" />
                </div>
                <div className="mx-2 col"> 
                    <img className="img-fluid" src={ InstagramIcon } alt="Instagram Icon" />
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <p className="small"> Icons made by Freepik from [ww.flaticon.com] </p>
            </div>
        </div>
    );
}