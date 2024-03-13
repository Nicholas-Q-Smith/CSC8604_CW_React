import React from 'react';

// import MaterialLayout from './components/MaterialLayout';

import Header from '../components/pageFormat/Header';

import Footer from '../components/pageFormat/Footer';

// import './HomePage.css';

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';
import TemperatureIndicator from '../components/TemperatureIndicator';
import Layout from '../components/Layout';

let view1 = true;

let view2 = false;

function HomePage(){

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

    if(view1) {    

    return (
        <>
        
        <Layout/>


        
        
        <p className='title'>Welcome to the home page</p>
        <p>Node Proxy Confirmation: {!data ? "Loading..." : data}</p>

        <hr class="rounded"></hr>

        <HumidityIndicator humidity={Number(vals.rh)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator moisture={Number(vals.sm)}/>

        <hr class="rounded"></hr>

        <TemperatureIndicator temp={Number(vals.tmp)}/>

        
        
        </>
        
        );
    } else if(view2) {

      //other view 

    }
    }


export default HomePage;