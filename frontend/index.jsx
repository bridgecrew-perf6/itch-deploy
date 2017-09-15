// Dependencies
import React, {Component} from 'react';
import {render} from 'react-dom';
import {LocaleProvider} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import {browserHistory} from 'react-router';
import esES from '../node_modules/antd/lib/locale-provider/es_ES';

// Componentes
import AppRoutes from './routes.jsx';

import './common.css';

render(
    <LocaleProvider locale={esES} className="full-height">
        <Router history={browserHistory}>
            <AppRoutes/>
        </Router>
    </LocaleProvider>
    , document.getElementById('app')
);