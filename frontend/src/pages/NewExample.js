import React from 'react';
import Navbar from '../components/Navbar';

import './NewExample.css';
import Footer from '../components/Footer';

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
                        <input className="mr-1" name="firstname" placeholder="Nome"/>
                        <input className="mr-1" name="lastname" placeholder="Sobrenome"/>
                        <br/><br/>
                        <input className="mr-1" /> 
                        {/* TODO: fazer isso ficar minimamente decente */}
                    </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}