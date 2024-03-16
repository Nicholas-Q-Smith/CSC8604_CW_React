import React from 'react';

// import MaterialLayout from './components/MaterialLayout';

import Header from '../components/pageFormat/Header';

import Footer from '../components/pageFormat/Footer';

// import './HomePage.css';

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';
import TemperatureIndicator from '../components/TemperatureIndicator';
import Layout from '../components/Layout';
import HorizontalLayout from '../components/HorizontalLayout';
import DigitalTemp from '../components/DigitalTemp';
import PlantTile from '../components/tiles/PlantTile';
import RelevantPlants from '../components/RelevantPlants';

let view1 = true;

let view2 = false;

function HomePage(){

    const [data, setData] = React.useState(null);

    const [vals, setVals] = React.useState({});

    const [plantvals, setPlantVals] = React.useState({});

    React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      
    fetch("/sensors")
      .then((res) => res.json())
      .then((vals) => setVals(vals))
    
    fetch("/get-best-match")
      .then((res) => res.json())
      .then((plantvals) => setPlantVals({items: plantvals}))
    }, []);

    
    console.log(vals)

    if(view1) {    

    return (
        <>
        
        <HorizontalLayout/>

        <hr class="rounded"></hr>

        <HumidityIndicator humidity={Number(vals.rh)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator moisture={Number(vals.sm)}/>

        <hr class="rounded"></hr>

        <DigitalTemp temp={Number(vals.tmp)}/>

        <hr class="rounded"></hr>
        
        <RelevantPlants vals={plantvals}/>

        </>
        
        );
    } else if(view2) {

      //other view 

    }
    }


export default HomePage;