// Dependencies
import React, {Component} from 'react';
import {render} from 'react-dom';
import {LocaleProvider} from 'antd';
import esES from '../node_modules/antd/lib/locale-provider/es_ES';

// Componentes
import App from './components/App.jsx';
render(
    <LocaleProvider locale={esES}>
        <App/>
    </LocaleProvider>
    , document.getElementById('app')
);