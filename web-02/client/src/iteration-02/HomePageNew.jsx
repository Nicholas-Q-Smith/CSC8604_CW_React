import React from 'react';

import { useState } from 'react';

// import MaterialLayout from './components/MaterialLayout';

import Header from '../components/pageFormat/Header';

import Footer from '../components/pageFormat/Footer';

// import './HomePage.css';

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';
import TemperatureIndicator from '../components/TemperatureIndicator';
import Layout from '../components/Layout';
import HorizontalLayout from '../components/HorizontalLayout';
import HorizontalLayoutNav from '../components/HorizontalLayoutNav';
import DigitalTemp from '../components/DigitalTemp';
import PlantTile from '../components/tiles/PlantTile';
import RelevantPlants from '../components/RelevantPlants';

import GetData from '../async/GetData';
import { FetchSensors } from '../async/FetchSensors';
import SeasonsDisplayDay from '../components/SeasonsDisplayDay';

let view1 = true;

let view2 = false;

function HomePage() {



    let {data, vals, plantvals} = GetData();

    const [autoUpdate, setAutoUpdate] = useState(false);
    
    const toggleAutoUpdate = () => {
      setAutoUpdate(!autoUpdate);
      console.log("Toggle Switch Status: " + autoUpdate);
    }

    if(view1) {    

    return (
        <>
        
        <HorizontalLayoutNav onToggle={toggleAutoUpdate}/>

        <HumidityIndicator sensor={1} humidity={Number(vals.rh)}/>

        <hr class="rounded"></hr>

        <SoilMoistureIndicator moisture={Number(vals.sm)}/>

        <hr class="rounded"></hr>

        <SeasonsDisplayDay/>
        
        <hr class="rounded"></hr>

        <DigitalTemp sensor={1} isAutoUpdating={autoUpdate}/>

        <hr class="rounded"></hr>
        
        <RelevantPlants plantvals={plantvals}/>

        </>
        
        );
    } else if(view2) {

      //other view 

    }
  }
    


export default HomePage;