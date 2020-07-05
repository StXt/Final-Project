import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';


// Use push, replace, and go to navigate around.
// history.push('/');

// To stop listening, call the function returned from listen().
// unlisten();

ReactDOM.render((
    <BrowserRouter>     
        <App />
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
