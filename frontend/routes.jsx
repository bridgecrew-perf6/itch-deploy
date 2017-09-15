// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import Login from './login/index.jsx';
import Departamento from './departamento/index.jsx';

// layouts components
import LayoutAdmin from './layoutComponents/LayoutAdmin.jsx';
import Page404 from './layoutComponents/Page404.jsx';


const AppRoutes = () => 
            <Switch>
                <Route exact path="/usuario/auth" component={Login} />
                <LayoutAdmin path="/departamento">
                    <Route exact path="/departamento" component={Departamento}/>
                </LayoutAdmin>
                <Route component={Page404} />
            </Switch>

export default AppRoutes;