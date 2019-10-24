import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ExampleProfile from './pages/ExampleProfile/ExampleProfile.js';
import ExamplesList from './pages/ExamplesList/ExamplesList';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/teste123/" exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
            <Route path="/teste123/exemplo/:exampleID" component={ ExampleProfile }/>
            <Route path="/teste123/exemplos" exact component={ ExamplesList }/>
            <Route path="/teste123/termos-e-condicoes" exact component={ TermsAndConditions }/>
            <Route path="/teste123/sobre" exact component={ AboutUs }/>
        </BrowserRouter>
    );
}