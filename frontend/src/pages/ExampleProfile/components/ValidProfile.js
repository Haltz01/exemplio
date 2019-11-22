import React from 'react'

import locationIcon from '../../../assets/locationIcon.svg'

import { convertDate, normalizePodcastUrl } from '../utils.js'

export default function ValidProfile({exampleInfo}) {
    return (
        <div className="container">
            <div className="row">
                <div id={ exampleInfo.exemploID } className="customBox d-flex flex-column m-3 align-items-center text-center h-100 col-xs col-sm-11 col-md-11 col-lg-3">
                    <div className="topDetail justify-content-center mb-2"></div>
                    <div className="row no-gutters">
                        <div className="col">
                            <h2 className="titleCustom mb-2"> { exampleInfo.firstName + " " + exampleInfo.lastName } </h2>
                            <h5 className="placeOfOriginInProfile mb-2"> 
                                <img className="mr-2" alt="location" src={locationIcon}/>
                                { exampleInfo.placeOfOrigin }
                            </h5>  
                            <img className="imageCustom img-fluid mb-3" src={ exampleInfo.imageLink } alt="Profile"/>
                            <div>
                                <h4 className="TagsInProfile mb-2">
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
                    </div>

                    {/* Infringindo grid layout aaaa */}
                    <div className="row m-3 text-left"> 
                        <h1 className="titleCustom mx-auto"> Sobre </h1>                             
                        <div className="col-12">
                            <p className="aboutDescription"> 
                                { exampleInfo.briefing }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="podcastBox d-flex flex-column mt-3 p-4 align-items-left text-left col">
                        <h1 className="m-1 titleCustom"> Entrevista em {convertDate(exampleInfo.insertionDate)} </h1>
                        <div className="m-1 p-2">
                            <iframe name="podcastIframe" title="podcastIframe" src={ normalizePodcastUrl(exampleInfo.podcastLink) } frameBorder="0" className="castbox-responsive-player"/> 
                            {
                                /* //A cookie associated with a cross-site resource at http://castbox.fm/ was set without the `SameSite` attribute. 
                                    A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and 
                                    `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at 
                                    https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032
                                    https://www.w3schools.com/js/js_ajax_http_send.asp
                                    https://stackoverflow.com/questions/17694807/how-to-set-custom-http-headers-when-changing-iframe-src/40623473
                                */
                            }
                        </div>
                    </div>
                    <div className="customBox mt-3 p-3 col">
                        <h2 className="titleCustom ml-4"> Linha do tempo de { exampleInfo.firstName + " " + exampleInfo.lastName } </h2>
                        <div className="d-flex comments flex-column m-2 align-items-center">
                        { 
                            (exampleInfo.eventDescriptionList !== undefined) ? ( 
                                exampleInfo.eventDescriptionList.map((element, index) => {
                                    return (
                                        // TODO validar remover bubble
                                        <div key={"timeline_"+index} className="timelineInfo comment bubble m-1 mt-4 p-3 col-xs col-sm-10 col-md-8 col-lg-8">
                                            <div className="row ">
                                                <div className="col text-left">
                                                    <p className="eventTitle"> <strong> {exampleInfo.eventTitleList[index]} </strong> </p>
                                                </div>
                                                <div className="align-items-right col">
                                                    <div className="d-flex flex-column align-items-center float-right eventDate">
                                                        <div className="eventDate">
                                                            {exampleInfo.eventDateList[index]}
                                                        </div>
                                                        {/* <div className="dateDetailLine"></div> --> removendo temporariamente a data */}
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
                    </div>
                </div>
            </div>
            <div className="row">
                
            </div>
            <div className="row">
                
            </div>
        </div>
    )
}