import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import App from './common/App';
// import Controller from './screens/Controller';



ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
