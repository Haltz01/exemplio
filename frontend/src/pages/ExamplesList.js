import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExamplesList.css';
import Footer from './Footer';
import Navbar from './Navbar';

import WALUIGI from '../assets/WALUIGI.jpg';
import locationIcon from '../assets/locationIcon.svg'

import api from '../services/api'; // -> Comunicar-se como backend!

export default function ExamplesList() {
    const [examplesInfoList, setExamplesInfoList] = useState([]);

    useEffect(() => {
        async function getExamplesInfoList() {
            const response = await api.get('/exemplos/basicList', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setExamplesInfoList(response.data);
        }

        getExamplesInfoList();
    }, []); // [] => executa uma vez

    return (
        <div> 
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <h2 className="titleCustom m-4 col">Categorias </h2>
                        <div className="categoriesBox p-3">
                            <nav className="nav flex-column" id="categoriesNav" role="tablist">
                                <a className="categoryText nav-link active" href="#">Novos Exemplos</a>
                                <a className="categoryText nav-link" href="#">Artes</a>
                                <a className="categoryText nav-link" href="#">Causas Sociais</a>
                                <a className="categoryText nav-link" href="#">Ciência</a>
                                <a className="categoryText nav-link" href="#">Educação</a>
                                <a className="categoryText nav-link" href="#">Esporte</a>
                                <a className="categoryText nav-link" href="#">Negócios</a>
                                <a className="categoryText nav-link" href="#">Política</a>
                                <a className="categoryText nav-link" href="#">Sustentabilidade</a>
                                <a className="categoryText nav-link" href="#">Tecnologia</a>
                                <a className="categoryText nav-link" href="#">Voluntariado</a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg col-xl">

                        <div className="row">
                            <h2 className="titleCustom m-4 col"> Novos Exemplos </h2>
                        </div>

                        <div className="row customAlignCssRow">

                            { examplesInfoList.map((exampleInfo) => {
                            return (
                                <div key={ exampleInfo.exemploID } className="exampleCard d-flex flex-column mx-2 align-items-center text-center border border-info">
                                    <div className="topCardDetail justify-content-center"></div>
                                    <Link to={'/exemplo/' + exampleInfo.exemploID }>
                                        <img className="img-fluid imageDetails mt-4 mb-4" src={ exampleInfo.imageLink } alt="WAAALUIGI"/>
                                        <h2 className="exampleNameText mx-1"> { exampleInfo.firstName + " " + exampleInfo.lastName } </h2>
                                        <h5 className="placeOfOriginText mb-2"> 
                                            <img className="mr-2" alt="location" src={ locationIcon }/>
                                            { exampleInfo.placeOfOrigin }
                                        </h5>
                                        <h4 className="exampleTagsText m-2 mb-4" >
                                            {   
                                                (exampleInfo.tags.length > 0) ?
                                                //Builds a string from all 'nextTag' (foreach) by concatenating them with ',' as separator
                                                exampleInfo.tags.reduce((currentString, nextTag) => {
                                                    return currentString + ', ' + nextTag;
                                                })
                                                : 'Erro, exampleTags.length == 0'
                                            }
                                        </h4> 
                                    </Link>
                                </div>
                            );
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}