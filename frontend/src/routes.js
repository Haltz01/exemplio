import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ExampleProfile from './pages/ExampleProfile';
import ExamplesList from './pages/ExamplesList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essas duas Routes, pois o Router compara o começo da rota somente*/ }
            <Route path="/exemplo/:id" component={ ExampleProfile }/>
            <Route path="/exemplos" exact component={ ExamplesList }/>
        </BrowserRouter>
    );
}