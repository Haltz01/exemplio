import React, { useState, useEffect } from 'react';
import './ExampleProfile.css';
import Navbar from './Navbar';
import Footer from './Footer';

import locationIcon from '../assets/locationIcon.svg'

/*
-> Align "justified" text inside everything (don't align to the left)


Links I'm consulting:
https://getbootstrap.com/docs/4.3/layout/overview/
https://getbootstrap.com/docs/4.0/layout/grid/
https://getbootstrap.com/docs/4.3/utilities/spacing/

https://xd.adobe.com/spec/cc1222ea-4331-481b-5719-3dd15471d179-ba23/screen/81b20b49-1400-4a5d-bf83-f66450699859/P-gina-do-exemplo
*/

import api from '../services/api'; // -> Comunicar-se como backend!

export default function ExampleProfile({ match }) { // match contém os parâmetros passados na rota (id)
    const [exampleInfo, setExampleInfo] = useState({});
    
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

        getExampleInfo();

    }, [match.params.id]); // executa sempre que há alteração em match.params.id

    return (
        <div> 
                <Navbar/>
                {
                    // Pesquisar um jeito mais fácil de verificar estas condições:
                    (Object.keys(exampleInfo).length !== 0 && exampleInfo.tags !== undefined && exampleInfo.tags.length !== 0 && exampleInfo.message === undefined) ? (
                        <div className="container">
                            <div className="row">
                                <div id={ exampleInfo.exemploID } className="customBox d-flex flex-column m-3 align-items-center text-center col-xs col-sm-11 col-md-11 col-lg-3">
                                    <div className="topDetail justify-content-center mb-2"></div>
                                    <h2 className="titleCustom mb-2"> { exampleInfo.firstName + " " + exampleInfo.lastName } </h2>
                                    <h5 className="placeOfOriginInProfile mb-2"> 
                                        <img className="mr-2" alt="location" src={locationIcon}/>
                                        { exampleInfo.placeOfOrigin }
                                    </h5>  
                                    <img className="imageCustom img-fluid mb-3" src={ exampleInfo.imageLink } alt="Profile"/>
                                    <div>
                                        <h4 className="TagsInProfile mb-2" >
                                            {   
                                                (exampleInfo.tags.length > 0) ?
                                                //Builds a string from all 'nexTag' (foreach) by concatenating them with ',' as separator
                                                exampleInfo.tags.reduce((currentString, nextTag) => {
                                                    return currentString + ', ' + nextTag;
                                                })
                                                : 'Erro, exampleTags.length == 0'
                                            }
                                        </h4> 
                                    </div>
                                </div>
                                <div className="aboutBox d-flex flex-column m-3 p-3 align-items-left text-left col">
                                    <h1 className="ml-4 titleCustom"> Sobre </h1> 
                                    <p className="ml-4 mr-3 aboutDescription"> 
                                        { exampleInfo.briefing }
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="podcastBox d-flex flex-column m-3 p-4 align-items-left text-left col">
                                    <h1 className="ml-4 titleCustom"> Entrevista </h1>
                                    <div className="ml-md-4 p-2">
                                        <iframe title="podcastIframe" src="https://castbox.fm/app/castbox/player/id2209666/id187554028?v=8.10.3&autoplay=0&hide_list=1" frameBorder="0" height="204px" className="castbox-responsive-player"/>                                            
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="customBox m-3 p-3 col">
                                   <h2 className="titleCustom ml-4"> Linha do tempo de { exampleInfo.firstName + " " + exampleInfo.lastName } </h2>
                                   <div className="d-flex comments flex-column m-2 align-items-center">
                                    { 
                                        (exampleInfo.eventDescriptionList !== undefined) ? ( 
                                            exampleInfo.eventDescriptionList.map((element, index) => {
                                                return (
                                                    <div key={"timeline_"+index} className="timelineInfo comment bubble m-1 mt-4 p-3 col-xs col-sm-10 col-md-8 col-lg-6">
                                                        <div className="row ">
                                                            <div className="col text-left">
                                                                <p className="eventTitle"> <strong> {exampleInfo.eventTitleList[index]} </strong> </p>
                                                            </div>
                                                            <div className="align-items-right col">
                                                                <div className="d-flex flex-column align-items-center float-right">
                                                                    <div className="eventDate">
                                                                        {exampleInfo.eventDateList[index]}
                                                                    </div>
                                                                    <div className="dateDetailLine"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        { element }
                                                    </div>
                                                )
                                            })
                                        )  : (console.log("Just wait a moment... Event Description List is empty")) 
                                    }
                                    </div>
                                    {/* { exampleInfo.eventDescriptionList } */}
                                </div>
                            </div>
                        </div>
                    ) 
                    : 
                    (
                        <div className="container">
                            <div className="customBox d-flex flex-column m-3 align-items-center text-center"> 
                                <br/><br/><br/><br/> 
                                <h1 className="errorMessage"> 
                                    Não encontramos o exemplo que você procurava. 
                                    <br/><br/> 
                                    Desculpe :(
                                </h1> 
                                <br/><br/><br/><br/>
                            </div>
                        </div>
                    )
                }
                <Footer />
        </div>
    );
}

/*
briefing: "Esse é o espaço para o briefing. O ideial é que possa ser inserido um texto bem grande que descreve o exemplo. É um texto de SOBRE basicamente."
eventDateList: (7) ["2000", "2013", "2014", "2015", "2016", "2018", "2019"]
eventDescriptionList: (7) ["Lorem ipsum dolor sit amet, consectetur adipiscing… Maecenas condimentum luctus lorem eget placerat.", "↵Phasellus mattis auctor velit, sed venenatis tell… bibendum erat, quis tincidunt diam est in lacus.", "↵Aliquam faucibus est leo, non feugiat enim dignis… tortor nisl. Vivamus auctor hendrerit fermentum.", "↵Nunc imperdiet semper est in ultrices. Donec dapi…at vehicula ante, nec feugiat est tellus nec est.", "↵Quisque laoreet lectus ac velit lacinia, eget dig…tis consequat. Praesent fermentum lacinia semper.", "↵Sed euismod diam nec mi sodales dapibus sed eu ju…vida. Vivamus in ligula et lectus laoreet mattis.", "↵Morbi suscipit nisl id tortor pretium, eget vulpu…dio eleifend, venenatis eros eget, lobortis ante."]
eventTitleList: (7) ["Titulo 1", "Titulo 2", "Titulo 3", "Titulo 4", "Titulo 5", "Titulo 6", "Titulo 7"]
exemploID: 1
exemploID_FKEY: 1
firstName: "Pedro"
imageLink: "../assets/exemplos/PedroGuerra.jpg"
insertionDate: "2019-09-16T03:00:00.000Z"
lastName: "Guerra Lourenço"
placeOfOrigin: "Santos - SP"
podcastLink: null
tags: ["Tecnologia"]
*/