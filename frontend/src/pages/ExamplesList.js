import React, { useState, useEffect } from 'react';
import './ExamplesList.css';
import Navbar from './Navbar';

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
                <div> DIV DE TESTE - "ExamplesList" </div>
                { examplesInfoList.map((exampleInfo) => {
                    return (
                        <div id={ exampleInfo.exemploID }>
                            <h1> { exampleInfo.firstName + " " + exampleInfo.lastName } </h1>
                            <h3> { exampleInfo.placeOfOrigin } </h3>
                            { exampleInfo.tags.forEach((element) => {
                                return (<h3> { element } </h3>);
                            })
                        }
                            <img src={exampleInfo.imageLink} alt={ exampleInfo.firstName + " " + exampleInfo.lastName } />
                            <h3> --------------------------------------------- </h3><br/>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}