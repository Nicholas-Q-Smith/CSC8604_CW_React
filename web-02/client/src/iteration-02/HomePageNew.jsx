import React from 'react';

import { useState } from 'react';

import HumidityIndicator from '../components/HumidityIndicator';
import SoilMoistureIndicator from '../components/SoilMoistureIndicator';

import HorizontalLayoutNav from '../components/HorizontalLayoutNav';
import DigitalTemp from '../components/DigitalTemp';

import RelevantPlants from '../components/RelevantPlants';

import GetData from '../async/GetData';

import SeasonsDisplayDay from '../components/SeasonsDisplayDay';



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
    

    
    
    const toggleAutoUpdate = () => {
      setAutoUpdate(!autoUpdate);
      console.log("Toggle Switch Status: " + autoUpdate);
    }

  return (
      <>
      
      <HorizontalLayoutNav onToggle={toggleAutoUpdate}/>

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