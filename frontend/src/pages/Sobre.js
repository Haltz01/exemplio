import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import './Sobre.css'

export default function Sobre() {
    return (
        <div>
            <Navbar/>

            <div className="container mt-5  ">
                <div className="row">
                    <div className="col-5 sobre-div">
                        <p className="sobre-titulo">Nossa proposta</p>
                        <p>
                            Imagina poder conhecer em detalhes a história de alguém que formou-se em Harvard, passou em medicina em uma universidade federal ou foi dançar ballet no Programa do Faustão. A proposta da exemplio é democratizar o acesso a exemplos de jovens que tiveram destaque em sua trajetória pessoal. Por meio de uma entrevista e linha do tempo, você pode estudar com clareza cada etapa, falha e dificuldade de quem foi além da média.
                        </p>
                    </div>
                    <div className="col-5 offset-1 sobre-div">
                        <p className="sobre-titulo">Nossa História</p>
                        <p>
                            Em 2019, três jovens apaixonados por impacto social se conheceram no Brazilian Leadership Bootcamp, um bootcamp de uma semana de duração em São Paulo que reúne jovens líderes de toda a américa latina. Guilherme David, Brenda Major e Guilherme Coube tiveram a ideia e chamaram pessoas para ajudar com a produção do projeto. Meses depois, a plataforma foi lançada!
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}