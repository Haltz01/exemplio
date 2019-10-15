import React from 'react';

import './Homepage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import exemplioLogo from '../assets/LogoVertical.svg';

// import api from '../services/api';  -> Comunicar-se como backend!

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="firstBlockBackground"> {/* incluir ROW como classe da problema na margem direita */}
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-column">
                            <div className="my-5">
                                <h1 className="firstBlockTitle mt-4"> Conheça exemplos de jovens que te inspirem. </h1>
                            </div>
                            <div className="my-4">
                                <h3 className="firstBlockSubtitle"> 
                                    Imagina que legal poder conhecer o passo-a-passo de pessoas que tiveram sucesso 
                                    naquilo em que você é apaixonado. A exemplio tornou isso uma realidade.
                                </h3>
                            </div>
                            <button className="accessExamplesButton mt-5" type="button">
                                <h3 className="firstBlockButtonText"> Acessar exemplos </h3>
                            </button>
                        </div>
                        <div className="col-7">
                            <div className="row justify-content-center">
                                <div className="exampleCard d-flex flex-column m-2 align-items-center text-center">
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                                <div className="exampleCard d-flex flex-column m-2 align-items-center text-center">
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="exampleCard d-flex flex-column m-2 align-items-center text-center">
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                                <div className="exampleCard d-flex flex-column m-2 align-items-center text-center">
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separeteBlock shadow w-100">
                </div>
            </div>
            <div className="container bg-light">
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </div>
    );
}