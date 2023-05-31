import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './assets/styles/ResetStyle';
import GlobalStyle from './assets/styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
