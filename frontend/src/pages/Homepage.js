import React from 'react';

import './Homepage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import exemplioLogo from '../assets/LogoVertical.svg';
import PerfilGuilhermeDavid from '../assets/exemplio-team-images/GuilhermeDavid.jpg';
import PerfilBrendaMajor from '../assets/exemplio-team-images/BrendaMajor.jpg';
import PerfilGuilhermeCoube from '../assets/exemplio-team-images/GuilhermeCoube.jpg';

// import api from '../services/api';  -> Comunicar-se como backend!

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div className="firstBlockBackground py-5"> {/* incluir ROW como classe da problema na margem direita */}
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-column">
                            <div className="my-5">
                                <h1 className="firstBlockTitle mt-4"> Conheça exemplos de jovens que te inspirem. </h1>
                            </div>
                            <div className="my-3">
                                <h3 className="firstBlockSubtitle"> 
                                    Imagina que legal poder conhecer o passo-a-passo de pessoas que tiveram sucesso 
                                    naquilo em que você é apaixonado. A exemplio tornou isso uma realidade.
                                </h3>
                            </div>
                            <button className="accessExamplesButton mt-4 p-3">
                                Acessar exemplos
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
                {/* <div className="separeteBlock shadow w-100"></div> */}
            </div>
            { /* ajustar responsividade!! */}
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="missionVisionDescriptionBox p-4 m-2 col-xs col-sm col-md col-lg">
                            <h2 className="secondBlockTitle my-3"> Nossa Missão </h2>
                            <p className="secondBlockDescription mt-5">
                                Democratizar o acesso a exemplos de jovens de destaque de todo o Brasil.
                            </p>
                        </div>
                        <div className="missionVisionDescriptionBox p-4 m-2 col">
                        <h2 className="secondBlockTitle my-3"> Nossa Proposta </h2>
                            <p className="secondBlockDescription mt-5">
                                Entrevistar jovens a partir de um podcast e criar uma timeline a partir de cada um deles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teamBlock pt-4">
                <h1 className="firstBlockTitle text-center mb-4 text-dark"> Conheça as pessoas por trás do projeto... </h1>
                <div className="container p-4 d-flex align-itens-center justify-content-center">
                    <div className="d-flex flex-column text-center col">
                        <img className="teamProfileImage mx-auto img-fluid shadow" src={ PerfilBrendaMajor } alt="Membro da equipe"></img>
                        <h2 className="teamName mt-4"> Brenda Major </h2>
                        <h3 className="teamRoll"> Chefe de Conteúdo </h3>
                    </div>
                    <div className="d-flex flex-column text-center col">
                        <img className="teamProfileImage mx-auto img-fluid shadow" src={ PerfilGuilhermeDavid } alt="Membro da equipe"></img>
                        <h2 className="teamName mt-4"> Guilherme David </h2>
                        <h3 className="teamRoll"> Chefe de Produto </h3>
                    </div>
                    <div className="d-flex flex-column text-center col">
                        <img className="teamProfileImage mx-auto img-fluid shadow" src={ PerfilGuilhermeCoube } alt="Membro da equipe"></img>
                        <h2 className="teamName mt-4"> Guilherme Coube </h2>
                        <h3 className="teamRoll"> Chefe de Crescimento </h3>
                    </div>
                </div>
            </div>
            <div className="bg-light pt-5">
                <div className="container d-flex flex-column text-center align-itens-center justify-content-center">
                    <div>
                        <h1 className="thirdBlockTitle"> Saia da sua bolha </h1>
                    </div>
                    <div>
                        <button className="accessExamplesButton shadow mt-5 mb-4 p-3">
                            Acessar exemplos
                        </button>
                    </div>
                    <div className="w-50 mx-auto mb-5">
                        <img className="img-fluid" src={ exemplioLogo } alt="Exemplio Logo"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}