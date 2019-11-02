import React from 'react';

export default function LoadingProfile() {
    return (
        <div className="container">
            <div className="row">
                <div className="customBox d-flex flex-column m-3 align-items-center text-center h-100 col-xs col-sm-11 col-md-11 col-lg-3">
                    <br></br>
                    <h2 className="titleCustom invalidBlock mb-2"> nome pequeno </h2>
                    <h5 className="placeOfOriginInProfile invalidBlock mb-2"> 
                        {/* <img className="mr-2" alt="location" src=""/> */}
                        Cidadesss
                    </h5>  
                    <div className="imageCustom invalidBlock img-fluid mb-3" src="" alt="Profile"/>
                    <div>
                        <h4 className="TagsInProfile invalidBlock mb-2" >
                            Ciências, Causas Sociais
                        </h4> 
                    </div>
                    <div className="d-flex flex-column m-3 align-items-left text-left col">
                        <h1 className="titleCustom text-center invalidBlock"> Sobre </h1> 
                        <p className="aboutDescription invalidBlock"> 
                            Várias linhas muito loucas uhuuulllll
                        </p>
                        <p className="aboutDescription invalidBlock"> 
                            Várias linhas muito loucas de tamanhos diferentes
                        </p>
                        <p className="aboutDescription invalidBlock"> 
                            Várias linhas muito 
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="podcastBox d-flex flex-column mt-3 p-4 align-items-left text-left col">
                        <h1 className="m-1 titleCustom invalidBlock"> Entrevista em sudsud </h1>
                        <div className="m-1 p-2">
                            <iframe name="podcastIframe" title="podcastIframe" src="" frameBorder="0" className="castbox-responsive-player invalidBlock"/> 
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
                        <h2 className="titleCustom m-4 invalidBlock"> Linha do tempo de algue </h2>
                        <div className="d-flex comments flex-column m-2 align-items-center">
                        { 
                                [1,2,3].map((element, index) => {
                                    return (
                                        // TODO validar remover bubble
                                        <div key={"timeline_"+index} className="timelineInfo comment bubble m-1 mt-4 p-3 col-xs col-sm-10 col-md-8 col-lg-8">
                                            <div className="row ">
                                                <div className="col text-left">
                                                    <p className="eventTitle invalidBlock"> Titulooos </p>
                                                </div>
                                                <div className="align-items-right col">
                                                    <div className="d-flex flex-column align-items-center float-right">
                                                        <div className="eventDate invalidBlock px-2">
                                                            11/09/2001
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="invalidBlock">
                                                A criançada fez a festa quando descobriu que o papai noel não existia, porque elas descobriram que poderiam pedir para o pai delas o que quisessem em qualquer momento do ano.
                                            </p>
                                        </div>
                                    )
                                })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}