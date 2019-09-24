import React, { useState, useEffect } from 'react';
import './ExampleProfile.css';
import Navbar from './Navbar';

import api from '../services/api'; // -> Comunicar-se como backend!

export default function ExampleProfile({ match }) { // match contém os parâmetros passados na rota (id)
    const [exampleInfo, setExampleInfo] = useState([]);
    
    // Conexão com backend para buscar informações de um exemplo específico
    useEffect(() => {
        async function getExampleInfo() {
            const response = await api.get(`/exemplos/${match.params.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setExampleInfo(response.data);
        }

        console.log(match.params.id);
        getExampleInfo();

    }, [match.params.id]); // [] => executa uma vez

    // Verificando alterações que ocorrem no exampleInfo!
    useEffect(() => {
        console.log("EXAMPLE INFO: ", exampleInfo);
    }, [exampleInfo]);

    return (
        <div> 
            <Navbar/>
            <div> DIV DE TESTE - "ExampleProfile" </div>
        </div>
    );
}