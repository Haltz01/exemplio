import React from 'react';
import Navbar from '../../components/Navbar';

import './NewExample.css';
import Footer from '../../components/Footer';

export default function NewExample() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="newExample-form-div container my-3 p-5">
                <div className="row">
                    <div className="col mx-auto">
                        <h1 className="text-center">Inserir novo exemplo</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 mx-auto">

                    <form className="p-5 border mx-auto">
                        <fieldset>
                            <legend> Informações Básicas </legend>
                            <input className="mt-1 mr-2 w-48 text-center" name="firstname" placeholder="Nome"/>
                            <input className="mt-1 w-48 text-center" name="lastname" placeholder="Sobrenome"/>
                            <input className="mt-1 mr-1 w-100 text-center" name="placeOfOrigin" placeholder="Origem"/>
                            <input className="mt-1 mr-1 w-100 text-center" name="podcastlink" placeholder="Podcast Link"/>
                        </fieldset>
                        <fieldset>
                            <input className="mt-5 mr-1 w-100 text-center" type="file"></input>
                            <input type="submit"></input>
                        </fieldset>
                        {/* TODO: fazer isso ficar minimamente decente */}
                    </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}