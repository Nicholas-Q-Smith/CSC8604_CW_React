import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './fonts/HammersmithOne-Regular.ttf';

import './fonts/JuliusSansOne-Regular.ttf';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Switch, Router } from 'react-router-dom';



import Home from './Home';

import HomePageNew from './iteration-02/HomePageNew';
import HomePageNew2 from './iteration-02/HomePageNew2';
import HomePage3 from './iteration-02/HomePageNew3';
import GraphView from './components/Graph';
import GraphPage from './iteration-02/GraphPage';


export default function App() {

  

  return(
  
    <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route exact path="layout1" element={<HomePage />} />
          <Route exact path="layout2" element={<HomePage2 />} /> */}
          <Route exact path="sensors1" element={<HomePageNew/>} />
          <Route exact path="sensors2" element={<HomePageNew2/>} />
          <Route exact path="sensors3" element={<HomePage3/>} />
          <Route exact path="graph" element={<GraphPage/>} />
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
