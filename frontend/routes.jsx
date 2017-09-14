// Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import Login from './login/index.jsx'
// import Page404 from './components/Page404';

const AppRoutes = () => 
        <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route component={Page404} /> */}
        </Switch>;

export default AppRoutes;