import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { linkPrefix } from './options.json';

import Homepage from './pages/Homepage/Homepage';
import ExampleProfile from './pages/ExampleProfile/ExampleProfile.js';
import ExamplesList from './pages/ExamplesList/ExamplesList';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound.js';
import Feedback from './pages/Feedback.js';
import NewExample from './pages/NewExample/NewExample';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`${linkPrefix}/`} exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
                <Route path={`${linkPrefix}/exemplo/:exampleID`} component={ ExampleProfile }/>
                <Route path={`${linkPrefix}/exemplos/`} exact component={ ExamplesList }/>
                <Route path={`${linkPrefix}/termos-e-condicoes/`} exact component={ TermsAndConditions }/>
                <Route path={`${linkPrefix}/sobre/`} exact component={ AboutUs }/>
                <Route path={`${linkPrefix}/faleconosco`} exact component={ Feedback } />
                <Route path={`${linkPrefix}/inserir`} exact component={ NewExample } />
                <Route path={`${linkPrefix}/`} component={ NotFound }/>
                <Route path={`/`}>
                    <h1>You are not suposed to reach this page</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}