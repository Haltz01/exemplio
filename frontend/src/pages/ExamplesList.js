import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExamplesList.css';
import Footer from './Footer';
import Navbar from './Navbar';

import locationIcon from '../assets/locationIcon.svg'

import api from '../services/api'; // -> Comunicar-se como backend!

export default function ExamplesList() {
    const [examplesInfoList, setExamplesInfoList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('Novos Exemplos');

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

    function selectExamplesByTag(tag) {
        let aTagSELECTED = document.getElementById(tag);

        if (aTagSELECTED === null) return;

        // console.log("TAG:" + tag + "AND <A> ELEMENT:", aTagSELECTED); 

        let currentActive = document.getElementsByClassName("active");
        currentActive[0].className = currentActive[0].className.replace(" active", "");

        aTagSELECTED.className += " active";

        setCurrentCategory(tag);

        if (tag === 'Novos Exemplos')
            selectNewExamples();

        else for (let i = 0; i < examplesInfoList.length; i++) {
            for (let tagIndex in examplesInfoList[i].tags) {
                let divToShow = document.getElementById(examplesInfoList[i].firstName + "_" + examplesInfoList[i].exemploID);

                if (examplesInfoList[i].tags[tagIndex] === tag) {
                    divToShow.style.display = "block";
                    break;
                }
                else
                    divToShow.style.display = "none";
            }
        }
    };

    function selectNewExamples() {
        let currDate = new Date();
        let timestampOneMonthAgo = currDate.getTime() - 2595384863;

        for (let i = 0; i < examplesInfoList.length; i++) {
            for (let tagIndex in examplesInfoList[i].tags) {
                let exampleInsertitionDate = new Date(examplesInfoList[i].insertionDate);
                let divToShow = document.getElementById(examplesInfoList[i].firstName + "_" + examplesInfoList[i].exemploID);

                if (exampleInsertitionDate.getTime() > timestampOneMonthAgo) {
                    divToShow.style.display = "block";
                    break;
                }
                else
                    divToShow.style.display = "none";
            }
        }
    };

    return (
        <div> 
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <h2 className="titleCustom m-4 col">Categorias </h2>
                        <div className="categoriesBox p-3">
                            <nav className="nav flex-column" id="categoriesNav" role="tablist">
                                <a id="Novos Exemplos" className="categoryText nav-link active" href="#" onClick={ () => selectExamplesByTag("Novos Exemplos") }>Novos Exemplos</a>
                                <a id="Artes" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Artes") }>Artes</a>
                                <a id="Causas Sociais" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Causas Sociais") }>Causas Sociais</a>
                                <a id="Ciências" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Ciências") }>Ciências</a>
                                <a id="Educação" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Educação") }>Educação</a>
                                <a id="Esporte" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Esporte") }>Esporte</a>
                                <a id="Negócios" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Negócios") }>Negócios</a>
                                <a id="Política" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Política") }>Política</a>
                                <a id="Sustentabilidade" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Sustentabilidade") }>Sustentabilidade</a>
                                <a id="Tecnologia" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Tecnologia") }>Tecnologia</a>
                                <a id="Voluntariado" className="categoryText nav-link" href="#" onClick={ () => selectExamplesByTag("Voluntariado") }>Voluntariado</a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <div className="row">
                            <h2 className="titleCustom m-4 col"> {currentCategory} </h2>
                        </div>

                        <div className="row customAlignCssRow">
                            { examplesInfoList.map((exampleInfo) => {
                            return (
                                <div className="" id={ exampleInfo.firstName + "_" + exampleInfo.exemploID } key={ exampleInfo.firstName + "_" + exampleInfo.exemploID }>
                                    <div className="exampleCard d-flex flex-column m-2 align-items-center text-center">
                                        <div className="topCardDetail justify-content-center"></div>
                                        <Link to={'/exemplo/' + exampleInfo.exemploID }>
                                            <img className="img-fluid imageDetails mt-4 mb-4" src={ exampleInfo.imageLink } alt={ exampleInfo.firstName + " " + exampleInfo.lastName }/>
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