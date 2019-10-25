import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './ExamplesList.css';
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js';

import api from '../../services/api'; // -> Comunicar-se como backend!
import ExamplesListCardInvalid from './components/ExamplesListCardInvalid';
import ExamplesListCard from './components/ExamplesListCard';

const caregoriesList = ['Novos Exemplos', 'Artes', 'Causas Sociais', 'Ciências', 'Educação', 'Esporte', 'Negócios', 'Política', 'Sustentabilidade', 'Tecnologia', 'Voluntariado' ];

export default function ExamplesList() {
    const [examplesInfoList, setExamplesInfoList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    //Error handling:
    const [noExamplesFound, setNoExamplesFound] = useState(false);
    const [searchingProgress, setSearchingProgress] = useState(false);
    const [searchTimeout, setSearchTimeout] = useState(false);
    
    setTimeout(() => setSearchTimeout(true), 5000);

    //Use effect inicial (não sei por que tem que estar em um useEffect, talvez seja bom mudar)
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

        console.log(currentCategory);
        let selectedCategory_a_ = document.getElementById(currentCategory);
        console.log(selectedCategory_a_);
        if (selectedCategory_a_ === null) return;

        let LST_currentActiveCategory_a_ = document.getElementsByClassName("categoryText active");
        if (LST_currentActiveCategory_a_ && LST_currentActiveCategory_a_.length > 0) {
            let currentActiveCategory_a_ = LST_currentActiveCategory_a_[0];
            if (currentActiveCategory_a_) //In the beginning, there will be no active category
                currentActiveCategory_a_.className = currentActiveCategory_a_.className.replace(" active", "");
        }
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

    // altera a posição e o estilo da aba de categorias após scroll
    $(document).ready(function() {
        $(document).scroll(function() {
            if($(window).scrollTop() > 70) {
                $('.categoriesBox').addClass(" afterScrollReposition");
            }
            else {
                $('.categoriesBox').removeClass(" afterScrollReposition");
            }
        });
    });

    return (
        <div> 
            <Navbar/>
            <div className="container bg-light">
                <div className="row">
                    <div className="col col-sm-5 col-md-5 col-lg-4 col-xl-3">
                        <div className="row">
                            <div className="col">
                                <h2 className="titleCustom m-4">Categorias</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="categoriesBox d-flex px-1 py-3 justify-content-center text-center">
                                    <nav className="nav d-flex flex-column align-itens-center justify-content-center" id="categoriesNav" role="tablist">
                                        <div> 
                                            {
                                                caregoriesList.map((category) => <Link id={category} className="categoryText nav-link" key={category} to="#" onClick={ () => setCurrentCategory(category)}>{category}</Link>)
                                            }
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <div className="row" id="category-title">
                            <div className="col">
                                <h2 className="titleCustom m-4"> {currentCategory} </h2>
                            </div>
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
                                <ExamplesListCardInvalid/>
                                <ExamplesListCardInvalid/>
                                <ExamplesListCardInvalid/>
                            </div>
                        </div>

                        <div className="row" id="examples-not-found">
                            <div className="categoriesBox d-flex text-center mx-3 p-3">
                                <div className="align-itens-center m-auto text-center">
                                    <h3 className="noExamplesMessage"> Por enquanto não há exemplos nessa categoria. <br/> Desculpe :( <br/><br/>
                                    Enquanto não adicionamos exemplos aqui, <br />
                                    aproveite para olhar outras categorias!
                                    </h3>
                                </div>
                            </div>
                        </div>
                        { /* LISTA QUEBRANDO MARGEM ESQUERDA EM PEQUENAS RESOLUÇÕES*/}
                        <div className="customAlignCssRow row">
                            { 
                                examplesInfoList.map((exampleInfo) => <ExamplesListCard key = { `exampleCard_${exampleInfo.exemploID}` } exampleInfo = { exampleInfo } isNew = { true }/>)
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}