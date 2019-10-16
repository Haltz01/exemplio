import React, {useState, useEffect} from 'react';

import './Homepage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import exemplioLogo from '../assets/LogoVertical.svg';

import api from '../services/api.js';
import ExampleCard from './Homepage/components/ExampleCard';


//Options

const NUM_EXAMPLE_CARDS = 4;

// import api from '../services/api';  -> Comunicar-se como backend!

export default function Homepage() {
    let [ examplesList, setExamplesList ] = useState([...Array(NUM_EXAMPLE_CARDS)].fill({}));

    async function fetchExamples() {
        const response = await api.get(`/exemplos/basicList`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setExamplesList(response.data);
    } //Quando a lista de exemplos carragar

    useEffect(() => {
        fetchExamples(NUM_EXAMPLE_CARDS);
    }, []); //Executa uma vez apenas.

    return (
        <div>
            <Navbar />
            <div className="firstBlockBackground pt-5"> {/* incluir ROW como classe da problema na margem direita */}
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
                            <button className="accessExamplesButton mt-4" type="button">
                                <h3 className="firstBlockButtonText m-2"> Acessar exemplos </h3>
                            </button>
                        </div>
                        <div className="col-7">
                            <div className="row justify-content-center">
                                <ExampleCard exampleInfo={examplesList[0]}/>
                                <ExampleCard exampleInfo={examplesList[1]}/>
                            </div>
                            <div className="row justify-content-center">
                                <ExampleCard exampleInfo={examplesList[2]}/>
                                <ExampleCard exampleInfo={examplesList[3]}/>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separeteBlock shadow w-100">
                </div>
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
            <div className="bg-light">
                <div className="container d-flex flex-column text-center align-itens-center justify-content-center">
                    <div>
                        <h1 className="thirdBlockTitle"> Saia da sua bolha </h1>
                    </div>
                    <div className="thirdBlockLogo">
                        <img className="img-fluid" src={ exemplioLogo } alt="Exemplio Logo"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}