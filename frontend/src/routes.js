import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { linkPrefix } from './options.json';

import Homepage from './pages/Homepage/Homepage';
import ExampleProfile from './pages/ExampleProfile/ExampleProfile.js';
import ExamplesList from './pages/ExamplesList/ExamplesList';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path={`/${linkPrefix}/`} exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
            <Route path={`/${linkPrefix}/exemplo/:exampleID`} component={ ExampleProfile }/>
            <Route path={`/${linkPrefix}/exemplos/`} exact component={ ExamplesList }/>
            <Route path={`/${linkPrefix}/termos-e-condicoes/`} exact component={ TermsAndConditions }/>
            <Route path={`/${linkPrefix}/sobre/`} exact component={ AboutUs }/>
        </BrowserRouter>
    );
}