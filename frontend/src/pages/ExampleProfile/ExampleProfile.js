import React, { useState, useEffect } from 'react';
// import $ from 'jquery';

import './ExampleProfile.css';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import { normalizePodcastUrl } from './utils';


/*
-> Align "justified" text inside everything (don't align to the left)
Links I'm consulting:
https://getbootstrap.com/docs/4.3/layout/overview/
https://getbootstrap.com/docs/4.0/layout/grid/
https://getbootstrap.com/docs/4.3/utilities/spacing/
https://xd.adobe.com/spec/cc1222ea-4331-481b-5719-3dd15471d179-ba23/screen/81b20b49-1400-4a5d-bf83-f66450699859/P-gina-do-exemplo
*/

import api from '../../services/api'; // -> Comunicar-se com o backend!
import ValidProfile from './components/ValidProfile';
import NotFoundProfile from './components/NotFoundProfile';
import LoadingProfile from './components/LoadingProfile';

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
async function loadDisqus() {
    var d = document, s = d.createElement('script');
    s.src = 'https://exemplio.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
};

const LOAD_TIMEOUT = 5000; //5 seconds

export default function ExampleProfile({ match }) { // match contém os parâmetros passados na rota (id)
    const [exampleInfo, setExampleInfo] = useState({});
    const [loadingHasTimeout, setLoadingHasTimeout] = useState(false);

    // Conexão com backend para buscar informações de um exemplo específico
    useEffect(() => {
        async function getExampleInfo(timeoutProcess) {
            const response = await api.get(`/exemplos/${match.params.exampleID}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.data.message) {
                clearTimeout(timeoutProcess);
                setLoadingHasTimeout(false);
                setExampleInfo(response.data);
                loadDisqus();
            }
        }
        let timeoutProcess = setTimeout(()=>setLoadingHasTimeout(true), LOAD_TIMEOUT);        
        getExampleInfo(timeoutProcess);

    }, [match.params.exampleID]); // executa sempre que há alteração em match.params.exampleID

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <React.Fragment> 
                <Navbar/>
                <div className="container bg-light">
                {
                    /* // Pesquisar um jeito mais fácil de verificar estas condições: */
                    (Object.keys(exampleInfo).length !== 0) ? 
                        <ValidProfile exampleInfo={exampleInfo}/>
                    : 
                    (loadingHasTimeout) ?
                        <NotFoundProfile/>
                    :
                        <LoadingProfile/>
                }

                {/* Disqus DIV */}
                <div id="disqus_thread"></div>
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                                            
                <Footer />
                </div>
        </React.Fragment>
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
