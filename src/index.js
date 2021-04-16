import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConsumptionProvider } from './contexts/consumptionContext';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConsumptionProvider>
        <App />
      </ConsumptionProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

