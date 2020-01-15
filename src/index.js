import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Main/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
        <a className="footer" href="https://www.linkedin.com/in/ant%C3%B4nio-matheus-386343187/" target="_blank">By: Antônio Matheus</a>
    </div>    
    ,document.getElementById('root'));


serviceWorker.unregister();
