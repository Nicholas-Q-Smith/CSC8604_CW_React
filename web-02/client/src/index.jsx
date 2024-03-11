import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Header from './components/pageFormat/Header';

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge'

import { IGRLinearGaugeModule, IgrLinearGauge } from 'igniteui-react-gauges';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Layout from './components/Layout';
import Home from './Home';
import HomePage from './HomePage';
import HomePage2 from './HomePage2';


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="layout1" element={<HomePage />} />
          <Route path="layout2" element={<HomePage2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
