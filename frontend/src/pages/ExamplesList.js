import React, { useState, useEffect } from 'react';
import './ExamplesList.css';
import Navbar from './Navbar';

import WALUIGI from '../assets/WALUIGI.jpg';

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

    return ( // FALTA RESPONSIVIDADE!
        <div> 
            <Navbar/>
            <div className="container d-flex justify-content-center align-items-stretch">
                <div className="container">
                    <h2 className="m-4"> Categorias </h2>
                    <div className="categoriesBox">

                    </div>
                </div>
                <div className="d-flex flex-column">
                    <h2 className="m-4"> Exemplos </h2>
                    <div className="container d-flex justify-content-between">
                        { examplesInfoList.map((exampleInfo) => {
                        return (
                            <div id={ exampleInfo.exemploID } className="exampleCard d-flex flex-column m-2 align-items-center text-center">
                                <div className="topCardDetail justify-content-center"></div>
                                <img className="imageDetails img-fluid mt-4 mb-2" src={ WALUIGI } alt="WAAALUIGI"/>
                                <h2 className="exampleNameText"> { exampleInfo.firstName + " " + exampleInfo.lastName } </h2>
                                <h5 className="placeOfOriginText mb-3"> { exampleInfo.placeOfOrigin } </h5> 
                                { exampleInfo.tags.forEach((element) => { // ARRUMAR FOREACH (não funcionando...)
                                    return ( <h4 className="exampleTagsText"> { element } </h4> );
                                }) 
                                }
                            </div>
                        );
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}