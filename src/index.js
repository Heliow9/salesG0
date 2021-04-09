import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConsumptionProvider } from './contexts/consumptionContext';



ReactDOM.render(
  <React.StrictMode>
    <ConsumptionProvider>
      <App />
    </ConsumptionProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

