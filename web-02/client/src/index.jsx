import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';




import Header from './components/pageFormat/Header';

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge'

import { IGRLinearGaugeModule, IgrLinearGauge } from 'igniteui-react-gauges';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomePage />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
