import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExamplesList.css';
import Footer from '../Components/Footer.js';
import Navbar from '../Components/Navbar.js';

import locationIcon from '../assets/locationIcon.svg'
import exemplioLogo from '../assets/LogoVertical.svg';

import api from '../services/api'; // -> Comunicar-se como backend!

export default function ExamplesList() {
    const [examplesInfoList, setExamplesInfoList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    //Error handling:
    const [noExamplesFound, setNoExamplesFound] = useState(false);
    const [searchingProgress, setSearchingProgress] = useState(false);
    const [searchTimeout, setSearchTimeout] = useState(false);
    
    setTimeout(() => setSearchTimeout(true), 5000);

    //Use effect inicial (não sei por que tem que estar em um useEffect, mas blz)
    useEffect(() => {
        async function getExamplesInfoList() {
            try {

                const response = await api.get('/exemplos/basicList', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setSearchingProgress(true);
                setExamplesInfoList(response.data);
                setCurrentCategory('Novos Exemplos');
            }
            catch (e) {
                console.error('Failed to connect to Database!');
                console.error(e);
                throw e;
            }
        }
        getExamplesInfoList();
    }, []); // [] => executa uma vez  

    //Handles notFoundDiv appearence
    useEffect(() => {
        let notFoundDiv = document.getElementById('examples-not-found');

        if (!notFoundDiv) 
            console.error('"Not found" div not found!!!');

        if (noExamplesFound) {
            if (searchingProgress) //Only show "No Examples" if DB has communicated
                notFoundDiv.style.display = 'block';
        } else {
            notFoundDiv.style.display = 'none';
        }
    }, [noExamplesFound, searchingProgress]);

    //Exibe mensagem de "Buscando exemplos" até o banco de dados retorná-los
    useEffect(() => {
        let searchingDiv = document.getElementById('searching-examples');
        let categoryTitleDiv = document.getElementById('category-title');

        if (searchingProgress) {
            searchingDiv.style.display = 'none';
            categoryTitleDiv.style.display = 'block';
        }
        else {
            searchingDiv.style.display = 'block';
            categoryTitleDiv.style.display = 'none';
        }
    }, [searchingProgress]);
    //Atualiza o timeout da div de search timeout
    useEffect(() => {
        let timeoutDiv = document.getElementById('searching-examples-timeout');
        if (searchTimeout) {
            timeoutDiv.style.display = 'block';
        }
        else timeoutDiv.style.display = 'none';
    }, [searchTimeout]);
    
    useEffect(selectExamplesByCategory, [currentCategory]);
    
    //Função que filtra os exemplos de acordo com a categoria (tag) selecionada pelo usuário
    function selectExamplesByCategory() {
        let getDivByExample = (example) => {
            return document.getElementById(example.firstName + "_" + example.exemploID);
        };
        
        let showDiv = (div) => div.style.display = "block";
        let hideDiv = (div) => div.style.display = "none";

        let selectedCategory_a_ = document.getElementById(currentCategory);
        if (selectedCategory_a_ === null) return;

        let currentActiveCategory_a_ = document.getElementsByClassName("categoryText active");
        currentActiveCategory_a_[0].className = currentActiveCategory_a_[0].className.replace(" active", "");
        selectedCategory_a_.className += " active";

        //Controls the exibition of "No examples" message
        let atLeastOneExampleFound = false;

        if (currentCategory === 'Novos Exemplos') {
            //Show everyone (it's already sorted by descending addition date)
            for (let example of examplesInfoList) {
                let exampleDiv = getDivByExample(example);
                showDiv(exampleDiv);
            }


            if (examplesInfoList.length > 0) 
                atLeastOneExampleFound = true;
        }
        else for (let i = 0; i < examplesInfoList.length; i++) {
            let currentExampleDiv = getDivByExample(examplesInfoList[i]);

            //Hide by default, showing only the right ones in the for below
            hideDiv(currentExampleDiv);

            for (let tagIndex in examplesInfoList[i].tags) {
                if (examplesInfoList[i].tags[tagIndex] === currentCategory) {

                    //Show the divs that match tag == category
                    showDiv(currentExampleDiv);

                    //Controls the "No Examples" message
                    atLeastOneExampleFound = true;

                    break;
                }
            }
        }     

        setNoExamplesFound(!atLeastOneExampleFound);

        return;
    };

    return (
        <div> 
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                        <h2 className="titleCustom m-4 col">Categorias </h2>
                        <div className="categoriesBox p-3">
                            <nav className="nav flex-column" id="categoriesNav" role="tablist">
                                <Link id="Novos Exemplos" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Novos Exemplos") }>Novos Exemplos</Link>
                                <Link id="Artes" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Artes") }>Artes</Link>
                                <Link id="Causas Sociais" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Causas Sociais") }>Causas Sociais</Link>
                                <Link id="Ciências" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Ciências") }>Ciências</Link>
                                <Link id="Educação" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Educação") }>Educação</Link>
                                <Link id="Esporte" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Esporte") }>Esporte</Link>
                                <Link id="Negócios" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Negócios") }>Negócios</Link>
                                <Link id="Política" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Política") }>Política</Link>
                                <Link id="Sustentabilidade" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Sustentabilidade") }>Sustentabilidade</Link>
                                <Link id="Tecnologia" className="categoryText nav-link" to="#" onClick={ () => setCurrentCategory("Tecnologia") }>Tecnologia</Link>
                                <Link id="Voluntariado" className="categoryText nav-link active" to="#" onClick={ () => setCurrentCategory("Voluntariado") }>Voluntariado</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <div className="row" id="category-title">
                            <h2 className="titleCustom m-4 col"> {currentCategory} </h2>
                        </div>

                        <div className="row" id="searching-examples">
                            <div className="row d-flex flex-column col">
                                <h2 className="titleCustom m-4"> Buscando exemplos... </h2>
                                <div className="p-3">
                                    Por favor, aguarde. A conexão parece estar um pouco lenta. <br/>
                                    <span id="searching-examples-timeout">
                                        Parece que há um problema de conexão com o servidor. 
                                        <button type="button" className="btn btn-link" onClick={()=>window.location.reload()}> Tente recarregar a página! </button>
                                    </span>
                                </div>
                            </div>

                            <div className="customAlignCssRow row">
                                <div className="exampleCardInvalid d-flex flex-column m-2 align-items-center text-center">
                                    <div className="topCardDetail justify-content-center"></div>
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h5 className="placeOfOriginText mb-2"> 
                                        <img className="mr-2" alt="location" src={ locationIcon }/>
                                        Carregando localização...
                                    </h5>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                                <div className="exampleCardInvalid d-flex flex-column m-2 align-items-center text-center">
                                    <div className="topCardDetail justify-content-center"></div>
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h5 className="placeOfOriginText mb-2"> 
                                        <img className="mr-2" alt="location" src={ locationIcon }/>
                                        Carregando localização...
                                    </h5>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                                <div className="exampleCardInvalid d-flex flex-column m-2 align-items-center text-center">
                                    <div className="topCardDetail justify-content-center"></div>
                                    <img className="img-fluid imageDetails mt-4 mb-4" src={ exemplioLogo } alt="Carregando imagem"/>
                                    <h2 className="exampleNameText mx-1"> Carregando nome... </h2>
                                    <h5 className="placeOfOriginText mb-2"> 
                                        <img className="mr-2" alt="location" src={ locationIcon }/>
                                        Carregando localização...
                                    </h5>
                                    <h4 className="exampleTagsText m-2 mb-4" >
                                        Carregando tags...
                                    </h4> 
                                </div>
                            </div>
                        </div>

                        <div className="row" id="examples-not-found">
                            <div className="categoriesBox d-flex text-center ml-3 p-3">
                                <div className="align-itens-center m-auto text-center">
                                    <h3 className="noExamplesMessage"> Por enquanto não há exemplos nessa categoria. <br/> Desculpe :( <br/><br/>
                                    Enquanto não adicionamos exemplos aqui, <br />
                                    aproveite para olhar outras categorias!
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="customAlignCssRow row">
                            { examplesInfoList.map((exampleInfo) => {
                            return (
                                <div id={ exampleInfo.firstName + "_" + exampleInfo.exemploID } key={ exampleInfo.firstName + "_" + exampleInfo.exemploID }>
                                    <div className="exampleListCard d-flex flex-column m-2 align-items-center text-center">
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
                                                    : 'Sem categorias'
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