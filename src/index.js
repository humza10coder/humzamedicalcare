import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,document.getElementById('root'));
//ReactDOM.render(what to show,where to show,return type)
//JSX: JavaScript Extendable or JavaScript and XML)