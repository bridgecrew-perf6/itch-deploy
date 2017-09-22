// Dependencies
import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// Components
import Login from './login/index.jsx';
import Departamento from './departamento/index.jsx';

// layouts components
import LayoutAdmin from './layoutComponents/LayoutAdmin.jsx';
import Page404 from './layoutComponents/Page404.jsx';


const AppRoutes = () => 
            <Switch>

                <Route exact path="/usuario/auth" component={Login} />
                <LayoutAdmin path="/admin" >
                </LayoutAdmin>
                <Route component={Page404} />
            </Switch>;

export default AppRoutes;