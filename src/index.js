import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Landing from './components/landing'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < Landing / > , document.getElementById('root'));
registerServiceWorker();