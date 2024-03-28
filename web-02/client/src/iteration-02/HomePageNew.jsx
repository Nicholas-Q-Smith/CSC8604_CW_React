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

import Graph from '../components/Graph';

let view1 = true;

let view2 = false;

/*
First plot home page. 
*/

function HomePage() {


    /*
    Auto update functionality, tied to child component
    of update toggle within navbar.
    */

    let {data, vals, plantvals} = GetData();;

    const [autoUpdate, setAutoUpdate] = useState(false);
    

    //Debug console message 
    
    const toggleAutoUpdate = () => {
      setAutoUpdate(!autoUpdate);
      console.log("Toggle Switch Status: " + autoUpdate);
    }

  return (
      <>
      
      <HorizontalLayoutNav onToggle={toggleAutoUpdate}/>


      <Graph></Graph>

      <HumidityIndicator sensor={1} isAutoUpdating={autoUpdate}/>

      <hr class="rounded"></hr>

      <SoilMoistureIndicator sensor={1} isAutoUpdating={autoUpdate}/>

      <hr class="rounded"></hr>

      <SeasonsDisplayDay/>
      
      <hr class="rounded"></hr>

      <DigitalTemp sensor={1} isAutoUpdating={autoUpdate}/>

      <hr class="rounded"></hr>
      
      <RelevantPlants plantvals={plantvals}/>

      </>
      
      );
  }
    


export default HomePage;