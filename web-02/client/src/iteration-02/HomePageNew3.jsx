import React from 'react';

import { useState } from 'react';

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';
import TemperatureIndicator from '../components/TemperatureIndicator';


import HorizontalLayoutNav from '../components/HorizontalLayoutNav';
import DigitalTemp from '../components/DigitalTemp';
import PlantTile from '../components/tiles/PlantTile';
import RelevantPlants from '../components/RelevantPlants';

import GetData from '../async/GetData';
import GetData2 from '../async/GetData2';
import GetDebugData from '../async/GetDebugData';

import SeasonsDisplayDay from '../components/SeasonsDisplayDay';


let view1 = true;

let view2 = false;

function HomePage3(){

    let {data, vals, plantvals} = GetDebugData();
        
    const [autoUpdate, setAutoUpdate] = useState(false);
    

    //Debug console message 
    
    const toggleAutoUpdate = () => {
      setAutoUpdate(!autoUpdate);
      console.log("Toggle Switch Status: " + autoUpdate);
    }

    return (
        <>
        
        <HorizontalLayoutNav onToggle={toggleAutoUpdate}/>
  
        <HumidityIndicator sensor={2} isAutoUpdating={autoUpdate}/>
  
        <hr class="rounded"></hr>
  
        <SoilMoistureIndicator sensor={2} isAutoUpdating={autoUpdate}/>
  
        <hr class="rounded"></hr>
  
        <SeasonsDisplayDay/>
        
        <hr class="rounded"></hr>
  
        <DigitalTemp sensor={2} isAutoUpdating={autoUpdate}/>
  
        <hr class="rounded"></hr>
        
        <RelevantPlants plantvals={plantvals}/>
  
        </>
        
      );
        
        
  } 
    


export default HomePage3;