import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Sobre" component={Sobre} />
                <Route path="/Servicos" component={Servicos} />
                <Route path="/Blog" component={Blog} />
                <Route path="/Contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}