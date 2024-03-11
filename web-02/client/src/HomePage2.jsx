import React from 'react';



import Header from './components/pageFormat/Header';

import Footer from './components/pageFormat/Footer';

import './HomePage.css';

import HumidityIndicator from './components/HumidityIndicator';
import SoilMoistureIndicator from './components/SoilMoistureIndicator';
import TemperatureIndicator from './components/TemperatureIndicator';

function HomePage2(){

    const [data, setData] = React.useState(null);

    const [vals, setVals] = React.useState({});

    React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      
    fetch("/sensors")
      .then((res) => res.json())
      .then((vals) => setVals(vals))
    }, []);


    console.log(vals)

    return (
        <>
        
        <Header/>

        <hr class="rounded"></hr>
        
        <p className='title'>Welcome to the home page (2)</p>
        <p>Node Proxy Confirmation: {!data ? "Loading..." : data}</p>

        <hr class="rounded"></hr>

        <HumidityIndicator humidity={Number(vals.rh)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator moisture={Number(vals.sm)}/>

        <hr class="rounded"></hr>

        <TemperatureIndicator temp={Number(vals.tmp)}/>

        <Footer></Footer>
        
        </>
        
        );
    }


export default HomePage2;