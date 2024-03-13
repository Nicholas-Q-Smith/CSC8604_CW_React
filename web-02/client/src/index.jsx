import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Header from './components/pageFormat/Header';

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge'

import { IGRLinearGaugeModule, IgrLinearGauge } from 'igniteui-react-gauges';
import { BrowserRouter, Routes, Route, Switch, Router } from 'react-router-dom';



import Layout from './components/Layout';
import Home from './Home';
import HomePage from './iteration-01/HomePage';
import HomePage2 from './iteration-01/HomePage2';
import HomePageNew from './iteration-02/HomePageNew';


export default function App() {
  return(
  
    <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="layout1" element={<HomePage />} />
          <Route exact path="layout2" element={<HomePage2 />} />
          <Route exact path="new-iter-home" element={<HomePageNew/>} />
    </Routes>
  
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
