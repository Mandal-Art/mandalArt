import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './css/_Style.scss';

import firebaseApp from "./firebaseApp";
// import "firebase/auth";
// import "firebase/database";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
