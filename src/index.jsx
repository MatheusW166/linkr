// PACKAGE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';

// VALUE IMPORTS
import App from './App';
import ResetStyle from './assets/styles/ResetStyle';
import GlobalStyle from './assets/styles/GlobalStyle';

// GLOBAL CONSTANTS
const root = ReactDOM.createRoot(document.getElementById('root'));

// FUNCTIONS
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
