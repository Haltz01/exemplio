import $ from 'jquery';

import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './AboutUs.css';

import locationIcon from '../assets/locationIcon.svg'

import PedroGuerra from '../assets/exemplio-team-images/PedroGuerra.jpg';
import GuilhermeDavid from '../assets/exemplio-team-images/GuilhermeDavid.jpg';
import GuilhermeCoube from '../assets/exemplio-team-images/GuilhermeCoube.jpg';
import MarcusVinicius from '../assets/exemplio-team-images/MarcusVinicius.jpg';

export default function AboutUs() {

    useEffect(()=>{
        async function loadProfileImages() {
            const profilePics = $('[data-src]');
            $.each(profilePics, (ind, elem) => {
                elem.src = elem.dataset.src;
            });
        }
        window.scrollTo(0,0);
        loadProfileImages();
    },[]);

    return (
        <div>
            <Navbar activePage="Sobre nós"/>
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="sobre-div m-2 col-xs-12 col-sm-12 col-md-6 col-lg">
                        <p className="sobre-titulo ml-5 mt-4">Nossa proposta</p>
                        <p className="mx-5 mb-5">
                            Imagina poder conhecer em detalhes a história de alguém que formou-se em Harvard, passou em medicina em uma universidade federal ou foi dançar ballet no programa do Faustão. A proposta da exemplio é democratizar o acesso a exemplos de jovens que tiveram destaque em sua trajetória pessoal. Por meio de uma entrevista e linha do tempo, você pode estudar com clareza cada etapa, falha e dificuldade de quem foi além da média.
                        </p>
                    </div>
                    <div className="sobre-div m-2 col-xs-12 col-sm-12 col-md col-lg">
                        <p className="sobre-titulo ml-5 mt-4">Nossa História</p>
                        <p className="mx-5 mb-5">
                            Em 2019, três jovens apaixonados por impacto social se conheceram no Brazilian Leadership Bootcamp, um bootcamp de uma semana de duração em São Paulo que reúne jovens líderes de toda a américa latina. Guilherme David, Brenda Major e Guilherme Coube tiveram a ideia e chamaram pessoas para ajudar com a produção do projeto. Meses depois, a plataforma foi lançada!
                        </p>
                    </div>
                </div>
                <p className="sobre-titulo my-4 ml-5 col-10">Nossa equipe</p>

                { /* ------------------ GUILHERME DAVID ------------------ */}
                <div className="row d-flex justify-content-center">
                    <div className="customBox d-flex flex-column m-2 pb-3 align-items-center text-center col-xs col-sm-11 col-md-11 col-lg-3">
                        <div className="topDetail justify-content-center mb-2"></div>
                        <a href="https://www.linkedin.com/in/gdavidss/" style={{"text-decoration":"none"}}>
                            <h2 className="titleCustom my-2"> Guilherme David </h2> 
                            <img className="imageCustom img-fluid mb-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src={ GuilhermeDavid } alt="Profile"/>
                            <h5 className="placeOfOriginInProfile mb-2"> 
                                <img className="mr-2" alt="location" src={locationIcon}/>
                                Cubatão - SP
                            </h5>
                            <h4> Chefe de Produto </h4>
                        </a>
                    </div>
                    <div className="sobre-div d-flex flex-column m-2 p-4 col">
                        <p className="sobre-titulo"> Sobre </p>
                        Guilherme David é um jovem cubatense de 20 anos de idade. 
                        É co-fundador da exemplio e do OrgulhoFederal. 
                        Por meio de uma doação de livros didáticos de um professor de educação Física, 
                        ele passou a estudar química por conta própria e a se apaixonar por ciências. 
                        Tendo sempre estudado em escolas públicas, 
                        Guilherme desenvolveu diversas iniciativas para aprimorar a comunidade à sua volta. 
                        O seu maior sonho é ampliar o acesso à educação holística aos estudantes de todo o Brasil.
                    </div>
                </div>

                <div><br/></div>

                { /* ------------------ GUI COUBE ------------------ */}
                <div className="row d-flex justify-content-center">
                    <div className="customBox d-flex flex-column m-2 pb-3 align-items-center text-center col-xs col-sm-11 col-md-11 col-lg-3">
                        <div className="topDetail justify-content-center mb-2"></div>
                        <a href="https://www.facebook.com/profile.php?id=100017794985369" style={{"text-decoration":"none"}}>
                            <h2 className="titleCustom my-2"> Guilherme Coube </h2> 
                            <img className="imageCustom img-fluid mb-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src={ GuilhermeCoube } alt="Profile"/>
                            <h5 className="placeOfOriginInProfile mb-2"> 
                                <img className="mr-2" alt="location" src={locationIcon}/>
                                São Paulo - SP
                            </h5>
                            <h4> Chefe de Crescimento </h4>
                        </a>
                    </div>
                    <div className="sobre-div d-flex flex-column m-2 p-4 col">
                        <p className="sobre-titulo"> Sobre </p>
                        Guilherme Ricci Coube tem 15 anos e nasceu e mora em São Paulo. É co-fundador da Exempl.io e da Creos App Development. 
                        Em um curso extra-curricular que frequentou no 8º ano, descobriu o poder da tecnologia, empreendedorismo e sustentabilidade. Desde então, vem realizando pesquisas científicas como a “Bicicleta de Bambu Sustentável, Tecnológica e Segura” e “Conversão Eletromecânica de Energia Sonora em Elétrica”, com as quais já foi premiado em feiras como a FEBRACE. Seu sonho é provar que o segredo para um futuro melhor é a união de áreas como sustentabilidade, tecnologia e empreendedorismo. Para isso, acredita que alguma adaptação da metodologia utilizada no sistema escolar brasileiro é necessária para que as futuras gerações cresçam com os conhecimentos dessas áreas.
                    </div>
                </div>

                <div><br/></div>

                { /* ------------------ PEDRO GUERRA ------------------ */}
                <div className="row d-flex justify-content-center">
                    { /* MESMO CSS UTILIZADO NA PÁGINA DO EXEMPLO (INDIVIDUAL)*/}
                        <div className="customBox d-flex flex-column m-2 pb-3 align-items-center text-center col-xs col-sm-11 col-md-11 col-lg-3">
                            <div className="topDetail justify-content-center mb-2"></div>
                            <a href="https://github.com/Haltz01" style={{"text-decoration":"none"}}>
                                <h2 className="titleCustom my-2"> Pedro Guerra </h2>
                                <img className="imageCustom img-fluid mb-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src={ PedroGuerra } alt="Profile"/>
                                <h5 className="placeOfOriginInProfile mb-2"> 
                                    <img className="mr-2" alt="location" src={locationIcon}/>
                                    Santos - SP
                                </h5>
                                <h4> Desenvolvedor Web Full Stack </h4>
                            </a>
                        </div>
                    <div className="sobre-div d-flex flex-column m-2 p-4 col">
                        <p className="sobre-titulo"> Sobre </p>
                        <p>
                            Pedro Guerra é um jovem estudante nascido em Santos/SP. 
                            Desde seu ensino fundamental participou e foi medalhista de olimpíadas de Matemática, 
                            Física e Informática. Durante o ensino médio no IFSP pôde reafirmar sua paixão pela computação, 
                            desenvolvendo um aplicativo de Realidade Aumentada para auxiliar no ensino de Física. 
                            Atualmente cursa Ciências da Computação na USP e participa de projetos externos, 
                            como a <i>Exemplio</i> e o <a href='https://ganesh.icmc.usp.br/'>Ganesh</a>, em áreas que o cativam. Acredita que a educação é a mais poderosa 
                            ferramenta de  transformação positiva no âmbito econômico, político, social e cultural. 
                            Um de seus sonhos é ver um país que verdadeiramente valorize a educação e tudo que há ao seu redor. 
                            Para isso, devemos ensinar às pessoas a importância e o poder da educação, basta termos iniciativa.
                        </p>
                    </div>
                </div>

                <div><br/></div>

                { /* ------------------ MARCUS VINICIUS ------------------ */}
                <div className="row d-flex justify-content-center">
                    <div className="customBox d-flex flex-column m-2 pb-3 align-items-center text-center col-xs col-sm-11 col-md-11 col-lg-3">
                        <div className="topDetail justify-content-center mb-2"></div>
                        <a href="https://github.com/marcuscastelo" style={{"text-decoration":"none"}}>
                            <h2 className="titleCustom my-2"> Marcus Vinícius </h2> 
                            <img className="imageCustom img-fluid mb-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src={ MarcusVinicius } alt="Profile"/>
                            <h5 className="placeOfOriginInProfile mb-2"> 
                                <img className="mr-2" alt="location" src={locationIcon}/>
                                Santos - SP
                            </h5>
                            <h4> Desenvolvedor Web Full Stack </h4>
                        </a>
                    </div>
                    <div className="sobre-div d-flex flex-column m-2 p-4 col">
                        <p className="sobre-titulo"> Sobre </p>
                        <p>
                            Marcus Vinícius é um jovem de 19 anos nascido em Santos (SP). Com 15 anos descobriu sua paixão por computação e desde então segue esse caminho. Fez ensino técnico de informática no IFSP e agora é estudante de Ciência da Computação na USP. <br/>
                            Já foi medalhista da OBMEP, realizando, também, a OBI 2018 e 2019.  Participou do desenvolvimento do Librasim (projeto voltado à ampliação da acessibilidade a materiais didáticos para deficientes auditivos). Acredita na proposta da Exemplio de democratizar o acesso à educação, bem como na educação holística. 
                            Atualmente, participa da equipe de desenvolvimento da <i>Exemplio</i> e frequenta um grupo de estudos de Segurança da Informação (Ganesh).
                            <br/><br/>
                            Outros projetos:<br/>
                            <a href="https://github.com/marcuscastelo">
                                github/marcuscastelo
                            </a>
                        </p>
                    </div>
                </div>

                <div><br/></div>
            </div>
            
            <Footer/>
        </div>
    );
}