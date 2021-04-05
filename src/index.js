import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App'
import reportWebVitals from './reportWebVitals';

/** Additional CSS Files */
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/templatemo-breezed.css';
import './assets/css/owl-carousel.css';
import './assets/css/lightbox.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
