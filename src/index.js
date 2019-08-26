import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement: a tool for reloading your application in the browser
// without the page refresh. Hopefully, this tool can improve your experience
// as a developer because it's really save your time :)
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
