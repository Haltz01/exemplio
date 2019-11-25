import React from 'react';
import Navbar from '../components/Navbar';

import './Feedback.css';
import Footer from '../components/Footer';

export default function Feedback() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="feedback-form-div container my-3 p-5">
                <div className="row">
                    <div className="col mx-auto">
                        <h1 className="text-center">Dê seu feedback</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 border">
                        <div className="d-flex flex-row justify-content-center">
                            <label className="mr-4">Teste</label>
                            <input name="firstname" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}