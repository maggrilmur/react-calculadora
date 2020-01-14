import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Main/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>    
    ,document.getElementById('root'));


serviceWorker.unregister();
