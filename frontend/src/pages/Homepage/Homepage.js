import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { linkPrefix } from '../../options.json';

import './Homepage.css';
import NavbarHomepage from '../../components/NavbarHomepage';
import Footer from '../../components/Footer';

import exemplioLogo from '../../assets/logos/LogoVertical.svg';

import api from '../../services/api.js';
import ExampleCard from './components/ExampleHomepageCard';

//Options

const NUM_EXAMPLE_CARDS = 4;

export default function Homepage() {
    let [ examplesList, setExamplesList ] = useState([...Array(NUM_EXAMPLE_CARDS)].fill({}));

    async function fetchExamples() {
        try {
            const response = await api.get(`/exemplos/basicList`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setExamplesList(response.data);
        } catch {
            console.log('ERROR: Database not available');
        }
        
    } //Quando a lista de exemplos carragar

    useEffect(() => {
        window.scrollTo(0,0);
        fetchExamples(NUM_EXAMPLE_CARDS);
    }, []); //Executa uma vez apenas.

    return (
        <div>
            <NavbarHomepage />
            <div className="container-fluid">
                <div id="firstBlock" className="firstBlockBackground row py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg d-flex flex-column">
                                <div className="row">
                                    <div className="col-12 mt-5 mb-4">
                                        <div className="mt-n5 mt-lg-4 text-left text-md-center text-lg-left"> 
                                            <h1 className="firstBlockTitle my-0 p-0">
                                                Conheça exemplos de jovens que te inspirem. 
                                            </h1>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 my-2">
                                        <h3 className="firstBlockSubtitle">
                                            Imagina que legal poder conhecer o passo a passo de pessoas que tiveram sucesso 
                                            naquilo em que você é apaixonado. A exemplio tornou isso uma realidade.
                                        </h3>
                                    </div>
                                    {/* Cards quando a tela está pequena, entre o titulo e o botão */}
                                    <div className="d-lg-none col-12 col-lg-8 col-xl-7">
                                        <div className="row no-gutters px-0">
                                            <div className="col-12 d-none d-flex justify-content-center">
                                                <div className="row no-gutters">
                                                    <div className="col ml-n1">
                                                        <ExampleCard exampleInfo={examplesList[0]}/>
                                                    </div>
                                                    <div className="col">
                                                        <ExampleCard exampleInfo={examplesList[1]}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row no-gutters px-0">
                                            <div className="col-12 d-none d-flex justify-content-center">
                                                <div className="row no-gutters px-0">
                                                    <div className="col ml-n1">
                                                        <ExampleCard exampleInfo={examplesList[2]}/>
                                                    </div>

                                                    <div className="col">
                                                        <ExampleCard exampleInfo={examplesList[3]}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-11 mx-auto mx-lg-0 mt-4">
                                        <Link to={`${linkPrefix}/exemplos`}> 
                                            <button className="accessExamplesButton w-100 p-3">
                                                    Acessar exemplos
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Cards quando a tela está grande, cards na direita */}
                            <div className="col-12 d-none d-lg-flex flex-column col-lg-8 col-xl-7 align-itens-center justify-content-center">
                                <div className="row d-none d-flex justify-content-center">
                                    <ExampleCard exampleInfo={examplesList[0]}/>
                                    <ExampleCard exampleInfo={examplesList[1]}/>
                                </div>
                                <div className="row d-none d-lg-flex justify-content-center">
                                    <ExampleCard exampleInfo={examplesList[2]}/>
                                    <ExampleCard exampleInfo={examplesList[3]}/>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="separeteBlock shadow w-100"></div> */}  
                </div>
                <div id="secondBlock" className="row bg-light py-5">
                    <div className="container">
                        <div className="row">
                            <div className="missionVisionDescriptionBox p-4 mx-auto col-11 col-lg">
                                <h2 className="secondBlockTitle my-3"> Nossa Missão </h2>
                                <p className="secondBlockDescription mt-5">
                                    Democratizar o acesso a exemplos de jovens de destaque de todo o Brasil.
                                </p>
                            </div>
                            <div className="missionVisionDescriptionBox p-4 mx-auto col-11 col-lg ml-lg-5 mt-3 mt-lg-0">
                            <h2 className="secondBlockTitle my-3"> Nossa Proposta </h2>
                                <p className="secondBlockDescription mt-5">
                                    Entrevistar jovens a partir de um podcast e criar uma timeline a partir de cada um deles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="thirdBlock" className="teamBlock row pt-4">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="firstBlockTitle text-left text-sm-center mx-auto mb-4 text-dark"> 
                                    Conheça as pessoas por trás do projeto
                                </h1>
                            </div>
                        </div>
                        <div className="row no-gutters w-100 p-4 align-itens-center justify-content-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="row no-gutters">
                                    <div className="col-12 col-sm-4">
                                        <div className="teamProfileCard text-center col-9 col-sm-12 mx-auto">
                                            <img className="teamProfileImage img-fluid shadow" src={ PerfilBrendaMajor } alt="Membro da equipe"></img>
                                            <h2 className="teamName mt-4"> Brenda Major </h2>
                                            <h3 className="teamRoll d-none"> Chefe de Conteúdo </h3>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="teamProfileCard text-center col-9 col-sm-12 mx-auto">
                                            <img className="teamProfileImage mx-auto img-fluid shadow" src={ PerfilGuilhermeDavid } alt="Membro da equipe"></img>
                                            <h2 className="teamName mt-4"> Guilherme David </h2>
                                            <h3 className="teamRoll d-none"> Chefe de Produto </h3>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="teamProfileCard text-center col-9 col-sm-12 mx-auto">
                                            <img className="teamProfileImage mx-auto img-fluid shadow" src={ PerfilGuilhermeCoube } alt="Membro da equipe"></img>
                                            <h2 className="teamName mt-4"> Guilherme Coube </h2>
                                            <h3 className="teamRoll d-none"> Chefe de Crescimento </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div id="fourthBlock" className="row bg-light pt-5">
                    <div className="container d-flex flex-column text-center align-itens-center justify-content-center">
                        <div>
                            <h1 className="thirdBlockTitle"> Saia da sua bolha </h1>
                        </div>
                        <div>
                            <button className="accessExamplesButton shadow mt-5 mb-4 p-3">
                                <Link to={`${linkPrefix}/exemplos`}> 
                                    Acessar exemplos
                                </Link>
                            </button>
                        </div>
                        <div className="w-50 homepageBottomLogo mx-auto mb-5">
                            <img className="img-fluid" src={ exemplioLogo } alt="Exemplio Logo"></img>
                        </div>
                    </div>
                </div>

            </div>  
            <Footer />
        </div>
    );
}