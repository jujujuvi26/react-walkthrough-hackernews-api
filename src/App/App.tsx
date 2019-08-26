import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from '../Home';
import './App.css';

export const App = () => {
  const renderHeader = () => {
    if (window.location.pathname !== '/') return null;
    return (
      <header className="App-header">
        <p>Hello everyone,</p>
        <p>
          Let's learn to fetch Hacker News API on React Application, <br />
          using Hot Module Replacement!
        </p>
        <Link to="/home">CLICK HERE TO START</Link>
        <p>
          For more info about Hot Module Replacement: <br />
          Watch the first 10 minutes of{' '}
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=xsSnOQynTHs"
          >
            Live React: Hot Reloading with Time Travel
          </a>{' '}
          :)
        </p>
      </header>
    );
  };

  return (
    <Router>
      <div className="App">
        <Route path="/home" component={Home} />
        {window.location.pathname === '/' && renderHeader()}
      </div>
    </Router>
  );
};
